/* ══ Portal Atto — base ═══════════════════════════════════════════════════════
   O comportamento que as páginas têm em comum. Deixa tudo em window.Atto.

   Roda sozinho, em toda página: o ano do rodapé e o menu móvel.
   A página chama, com os dados dela: Atto.esteira, Atto.revelar e
   Atto.formulario. O que é de uma página só (carrossel, roda, busca, galeria)
   continua no script dela.

   Este arquivo entra no <head>, e não no fim do <body> junto do script da
   página. No fim do <body> o navegador pinta a página enquanto baixa o
   arquivo — sem carrossel, sem esteira, sem os textos da capa da ata — e só
   depois roda os scripts. No <head> ele chega antes da primeira pintura, e o
   script da página roda assim que o HTML termina, como quando era embutido. */
(() => {
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));

  /* ─── Destino das solicitações ─────────────────────────────────────────── */
  // O FormSubmit entrega o formulário por e-mail sem servidor nosso e sem chave:
  // o endereço de destino é o próprio endpoint. A caixa precisa confirmar uma vez,
  // no primeiro envio. Se o envio falhar, cai no caminho alternativo de dizerFalha.
  const EMAIL_CONTATO = "attoportal@gmail.com";
  const ENDPOINT_FORMULARIO = `https://formsubmit.co/ajax/${EMAIL_CONTATO}`;

  /* ─── Rodapé e menu móvel ──────────────────────────────────────────────────
     Não dependem de dado nenhum da página. Como este arquivo roda no <head>,
     antes de o <body> existir, os dois esperam o HTML terminar.            */
  const aoTerminarOHtml = (fn) => {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  };

  aoTerminarOHtml(() => {
    const ano = document.getElementById("ano");
    if (ano) ano.textContent = new Date().getFullYear();

    const btnMenu = document.getElementById("btn-menu");
    const menu = document.getElementById("menu");
    if (!btnMenu || !menu) return;

    btnMenu.addEventListener("click", () => {
      const aberto = menu.classList.toggle("aberto");
      btnMenu.setAttribute("aria-expanded", String(aberto));
      btnMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });
    menu.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        menu.classList.remove("aberto");
        btnMenu.setAttribute("aria-expanded", "false");
      }
    });
  });

  /* ─── Esteira de termos ────────────────────────────────────────────────────
     Cada .trilho-mov diz no data-termos qual lista quer; a página passa as
     listas, por exemplo { frentes: [...], garantias: [...] }.              */
  const esteira = (termos) => {
    for (const trilho of document.querySelectorAll(".trilho-mov")) {
      const grupo = (termos[trilho.dataset.termos] || [])
        .map((t) => `<span class="termo">${esc(t)}<span class="losango" aria-hidden="true">&#9670;</span></span>`)
        .join("");
      // a segunda cópia é o que fecha o laço; para o leitor de tela ela não existe
      trilho.innerHTML =
        `<span class="grupo">${grupo}</span>` +
        `<span class="grupo" aria-hidden="true">${grupo}</span>`;
    }
  };

  /* ─── Entrada por rolagem ──────────────────────────────────────────────────
     Cada grupo entra escalonado, uma vez só. Quem pediu menos movimento no
     sistema não recebe classe nenhuma e vê a página inteira de imediato.

     grupos: [seletor, atraso entre irmãos em ms, classe]. A classe é "rev"
     quando não vem; a home usa "rev-f" nos cards do carrossel.             */
  const semMovimento = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revelar = (grupos) => {
    if (semMovimento) return;

    const pendentes = new Set();

    for (const [seletor, passo, classe = "rev"] of grupos) {
      document.querySelectorAll(seletor).forEach((el, i) => {
        // quem já entrou por um grupo anterior não entra de novo
        if (el.classList.contains("rev") || el.classList.contains("rev-f")) return;
        el.classList.add(classe);
        // o escalonamento para no sexto: além disso a espera fica perceptível
        el.style.setProperty("--atraso", `${Math.min(i, 5) * passo}ms`);
        pendentes.add(el);
      });
    }

    /* Varredura por posição, e não IntersectionObserver: o observer entrega o
       callback de forma assíncrona e, numa rolagem rápida ou num salto de
       âncora, o elemento já saiu da vista quando a entrega acontece — ele é
       reportado como fora de tela e o conteúdo ficaria oculto para sempre.
       Comparar a posição cobre também tudo que ficou para trás.             */
    let agendado = false;

    const varrer = () => {
      agendado = false;
      const linha = innerHeight * 0.92;
      for (const el of pendentes) {
        if (el.getBoundingClientRect().top < linha) {
          el.classList.add("vis");
          pendentes.delete(el);
        }
      }
      if (!pendentes.size) {
        removeEventListener("scroll", aoMover);
        removeEventListener("resize", aoMover);
      }
    };

    const aoMover = () => {
      if (agendado) return;
      agendado = true;
      requestAnimationFrame(varrer);
    };

    addEventListener("scroll", aoMover, { passive: true });
    addEventListener("resize", aoMover);
    varrer();
  };

  /* ─── Envio do formulário ──────────────────────────────────────────────────
     Liga o #form da página (com #retorno e #btn-enviar).
       assunto: função que devolve o assunto do e-mail na hora do envio
       rotulos: { nome do campo: rótulo } — o que entra no e-mail de reserva  */
  const formulario = ({ assunto, rotulos }) => {
    const form = document.getElementById("form");
    const retorno = document.getElementById("retorno");
    const btnEnviar = document.getElementById("btn-enviar");

    const dizer = (texto, ok) => {
      retorno.innerHTML = `<p class="aviso${ok ? " ok" : ""}">${esc(texto)}</p>`;
    };

    // Quando o envio falha, a solicitação não pode sumir em silêncio: mostramos o
    // endereço por extenso e um link que abre o e-mail já preenchido. Como link e
    // não como redirecionamento — em máquina sem cliente de e-mail configurado, o
    // redirecionamento não faz nada e o visitante fica sem saber o que houve.
    const dizerFalha = (dados) => {
      const linhas = [];
      for (const [k, v] of dados.entries()) {
        if (v && rotulos[k]) linhas.push(`${rotulos[k]}: ${v}`);
      }
      const link = `mailto:${EMAIL_CONTATO}?subject=${encodeURIComponent(assunto())}`
                 + `&body=${encodeURIComponent(linhas.join("\n"))}`;
      retorno.innerHTML = `<p class="aviso">Não foi possível enviar pelo site e sua solicitação `
        + `não foi registrada. Escreva para <strong>${esc(EMAIL_CONTATO)}</strong> ou `
        + `<a href="${link}" style="color:inherit">abra o e-mail já preenchido</a>.</p>`;
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (!form.reportValidity()) return;

      const dados = new FormData(form);
      if (dados.get("_honey")) return;

      dados.set("_subject", assunto());
      dados.set("_template", "table");
      dados.set("_captcha", "false");
      dados.set("_replyto", dados.get("email") || "");

      btnEnviar.disabled = true;
      dizer("Enviando…", true);
      try {
        const r = await fetch(ENDPOINT_FORMULARIO, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: dados
        });
        const resposta = await r.json().catch(() => ({}));
        if (!r.ok || String(resposta.success) === "false") throw new Error(resposta.message || r.status);
        form.reset();
        dizer("Solicitação recebida. A equipe responde com a ata compatível e a minuta de adesão.", true);
      } catch {
        dizerFalha(dados);
      } finally {
        btnEnviar.disabled = false;
      }
    });
  };

  window.Atto = { esc, semMovimento, esteira, revelar, formulario };
})();
