# Portal Atto — Design System

Sistema de design construído a partir da identidade do **Portal Atto**: um símbolo de quadrantes amarelos e um lockup "PORTAL ATTO" (caixa alta leve + preto pesado). Tudo aqui — cor, tipo, geometria, componentes e telas — deriva desses dois arquivos.

## Contexto e fontes

**Material recebido (única fonte de verdade):**

| Origem | Arquivo | O que é |
| --- | --- | --- |
| Upload do usuário | `uploads/14.png` → `assets/logo-mark.png` | Símbolo isolado, amarelo `#FFDE00`, PNG com transparência |
| Upload do usuário | `uploads/Sem-título-13.png` → `assets/logo-lockup.png` | Lockup completo: símbolo + "PORTAL" (leve) + "ATTO" (black) |

Não foram fornecidos: código-fonte, arquivo Figma, site, capturas do produto, fontes (`.ttf`/`.woff`), ícones, fotos ou textos de marketing. **Nenhum link ou repositório foi passado.**

### Interpretação do produto (assunção — confirmar)

Sem produto acessível, "Portal Atto" foi tratado como **portal corporativo de solicitações, documentos e assinaturas** para empresas brasileiras: protocolo por pedido, responsável, prazo, assinatura ICP‑Brasil, multiunidade. Toda a copy está em **pt‑BR**. Os UI kits recriam essa hipótese com componentes reais do sistema — são base de trabalho, não espelho de um produto existente. Se o produto real for outro (ou a língua for outra), os kits mudam; as fundações (cor, tipo, espaçamento, componentes) permanecem válidas.

---

## CONTENT FUNDAMENTALS — como se escreve na Atto

**Língua:** português do Brasil, sempre. Sem estrangeirismo quando existe palavra em português ("painel", não "dashboard"; "assinar", não "sign").

**Pessoa e voz:** fala-se **com** o usuário, na segunda pessoa implícita ("Assine até 12/09", "Acompanhe o andamento"). O produto se nomeia em terceira pessoa quando precisa aparecer ("O portal cobra os documentos que faltam"). Nunca "nós" institucional em interface; "nós" só em página de empresa.

**Tom:** direto, operacional, adulto. A promessa é *previsibilidade*, não entusiasmo. Frases curtas, verbo na frente, número quando existir.

- ✅ "3 documentos vencem esta semana"
- ✅ "Protocolo 2026‑4821 criado."
- ✅ "Cada pedido nasce com protocolo, responsável e prazo."
- ❌ "Ops! Parece que algo deu errado 😕"
- ❌ "Revolucione a gestão dos seus contratos!"

**Caixa:** frase capitalizada em títulos, botões e rótulos ("Nova solicitação", não "Nova Solicitação"). CAIXA ALTA só em `--type-overline` (11px, +14% de tracking) e no lockup. Nada de caixa alta em botão.

**Botões:** verbo no infinitivo, 1–3 palavras ("Assinar", "Criar solicitação", "Exportar CSV"). Cancelar é sempre "Cancelar".

**Estados e erros:** dizem o que aconteceu e o que fazer, sem culpar o usuário. "Senha incorreta." / "Não foi possível conectar ao ERP às 14h02." Vazio nunca soa como erro: "Nenhuma solicitação por aqui" + próximo passo.

**Toast:** título no passado, ≤ 4 palavras ("Documento assinado"); mensagem com o dado verificável ("Protocolo 2026‑4822 enviado para análise.").

**Números:** formato brasileiro — `R$ 12.400,00`, `12/09`, `12.345.678/0001-90`. Identificadores e valores em mono tabular.

**Emoji: não.** Nem em interface, nem em marketing, nem em vazio de lista. O acento de humanidade vem do amarelo, não de figurinha.

**Pontuação:** título sem ponto final; frase de apoio com ponto. Sem exclamação (a única exceção tolerada é nenhuma).

---

## VISUAL FOUNDATIONS

### Cor
Dois protagonistas: **preto puro `#000`** e **amarelo `#FFDE00`** (amostrados do arquivo original). Todo o resto é neutro. O amarelo é **acento e ação**, nunca fundo de página, nunca texto sobre branco (1,2:1). Regra prática: **uma superfície amarela por tela** — o botão primário, ou a faixa de CTA, ou um card em destaque; nunca os três.

- Ramp neutra `--ink-1000 → --ink-25` levemente fria, para o amarelo ficar como única nota quente.
- Semânticas: verde (sucesso), **laranja** (atenção — porque amarelo é marca), vermelho (erro), azul (informação). Amarelo **nunca** significa status.
- Escopo escuro pronto: a classe `.atto-inverse` reescreve texto/superfície/borda para faixas pretas (hero, rodapé, toast, card de plano).
- Imagens: não há banco de imagens da marca. Quando houver foto, tratar em cor natural levemente dessaturada, com preto e amarelo entrando por sobreposição de UI — sem filtro colorido, sem grão, sem duotone inventado.

### Tipografia
`--font-sans` / `--font-display` = **Archivo** (Google Fonts, variável 100–900) e `--font-mono` = **JetBrains Mono**.
**Substituição sinalizada:** as fontes do logo não foram fornecidas. Archivo é o vizinho mais próximo (ápice do A em ponta, terminais retos, O levemente elíptico) e cobre os dois extremos do lockup — leve em caixa alta e black para display.

- Display 36–64px em peso 900, tracking −3%: o ritmo do "ATTO".
- Interface em 400/500/600; 15px é o corpo padrão, 13px a tabela.
- Caixa alta só em overline (+0.14em) e no lockup (+0.32em).
- `text-wrap: balance` em títulos, `pretty` em parágrafos; medida de leitura 62–68 caracteres.

### Geometria e cantos
O símbolo é um quadrado partido em quadrantes com um canto arredondado a 50%. A interface cita isso, não copia: raios de 4/6/10/14/20/28px, com **um** canto ampliado (`--radius-2xl`, prop `quadrant`) em no máximo um elemento por bloco — card em destaque, tile de ícone, `EmptyState`.

### Superfícies, bordas e sombra
Card = branco, borda 1px `--border-subtle`, raio 14px, `--shadow-xs`. **Profundidade é exceção:** `sm` para menu, `md` para hover de card clicável, `lg` para toast, `xl` para modal. Nada de sombra colorida — exceto `--shadow-brand`, reservada a um CTA de campanha. Nada de borda colorida só à esquerda. Nada de gradiente: o sistema é chapado (o único gradiente tolerado é o scrim do modal, preto a 55% com blur de 2px).

### Espaçamento e layout
Passos de 4px (`--space-1…15`). Dentro de componente 4–16; entre blocos 24–48; entre faixas de site 80–128. Grid de 12 colunas com gap de 24px, containers 640/880/1120/1280/1440. App: sidebar fixa de 248px + topbar de 64px, conteúdo com 28–32px de respiro. Topbar do site é fixa com `backdrop-filter: blur(10px)` sobre branco a 86% — o **único** uso de transparência + blur em superfície, além do scrim de modal.

### Movimento
Rápido e sem graça: 120ms para cor/hover, 180ms para switch e aba, 260ms para modal e toast. `--ease-standard` (cubic-bezier(.2,0,0,1)) no geral, `--ease-out` para entradas. Entradas deslizam 8–10px e aparecem — **nada quica**, nada gira além do `loader-circle`. `prefers-reduced-motion` zera todas as durações.

### Estados
- **Hover:** superfície sobe um degrau de neutro (`--ink-50`/`--ink-100`) ou o amarelo escurece para `--atto-yellow-press`. Nunca opacidade.
- **Press:** `transform: scale(.985)` + um degrau a mais de escurecimento.
- **Foco:** anel preto de 2px com halo branco (`--focus-ring`) — visível sobre branco e sobre amarelo; em campos, borda preta + halo amarelo `--atto-yellow-tint`.
- **Selecionado:** amarelo cheio (chip, checkbox, switch) ou amarelo lavado (linha de tabela, item de menu).
- **Desabilitado:** opacidade 0.45 e cursor `not-allowed`, sem mudar a cor de base.

---

## ICONOGRAPHY

A marca **não forneceu nenhum ícone**. Substituição sinalizada: **Lucide** via CDN (`lucide-static@0.427.0`), traço de 2px em grade de 24 — o peso mais próximo da geometria seca do logo. Não há icon font, sprite ou SVG proprietário neste sistema.

- Renderização: máscara CSS (`mask: url(...)`) sobre `background: currentColor`, encapsulada no componente `Icon`. Assim o glifo herda a cor do texto e nunca vira PNG colorido.
- Tamanhos: 15–16px em texto e tabela, 17–19px em botões, 22–26px em tiles de destaque.
- Cor: `--ink-500` em repouso, `--ink-900` em destaque, amarelo **apenas** sobre preto.
- Ícone sempre acompanha rótulo, exceto em `IconButton` (que exige `label` para leitor de tela).
- **Emoji e caracteres unicode como ícone: proibidos.** Traço à mão em SVG: proibido — se faltar um glifo, escolha outro do Lucide.

Se a Atto tiver um conjunto próprio, ele substitui o Lucide sem tocar em nenhum componente: basta trocar a URL dentro de `components/core/Icon.jsx`.

---

## Índice

**Raiz**
- `styles.css` — ponto de entrada único (só `@import`)
- `base.css` — resets e defaults de elemento (inclui cor de link e `:focus-visible`)
- `thumbnail.html` — tile do sistema
- `SKILL.md` — versão Agent Skill deste sistema
- `readme.md` — este arquivo

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius.css` · `elevation.css` · `motion.css` · `layout.css`

**`assets/`** — `logo-mark.png`, `logo-mark-black.png`, `logo-mark-white.png`, `logo-lockup.png`, `logo-lockup-reversed.png` (texto branco + símbolo amarelo), `logo-lockup-black.png`, `logo-lockup-white.png`

**`guidelines/`** — 22 cards de especificação: marca (logo, versões, respiro, motivo quadrante, ícones), cor (amarelo, ink, semânticas, superfícies, pares aprovados), tipo (display, títulos, corpo, mono, caixa alta, escala), espaço (escala, aplicação, raios, elevação, movimento, grid)

**`components/`**
- `core/` — **Button**, **IconButton**, **Icon**, **Badge**, **Tag**, **Card**, **Avatar**
- `forms/` — **Input**, **Select**, **Checkbox**, **Radio** (+ **RadioGroup**), **Switch**
- `navigation/` — **Tabs**, **Breadcrumbs**
- `feedback/` — **Dialog**, **Toast** (+ **ToastStack**), **Tooltip**, **Alert**
- `data/` — **DataTable**, **EmptyState**

Cada pasta tem `<Nome>.jsx`, `<Nome>.d.ts`, `<Nome>.prompt.md` e um card `*.card.html` com os estados principais.

**`ui_kits/`**
- `portal/` — app do cliente: login, painel, solicitações, detalhe, configurações (`README.md` com o escopo)
- `site/` — home institucional: hero, recursos, passos, planos, FAQ, CTA, rodapé

### Adições intencionais
Nenhuma fonte definiu inventário de componentes, então o conjunto padrão foi autorado. Além dele, entraram quatro peças com motivo:

- **Icon** — o sistema depende de um conjunto externo (Lucide); um único invólucro concentra essa dependência.
- **Alert** — mensagem que permanece na página; `Toast` é passageiro e `Dialog` bloqueia.
- **DataTable** — o portal é um navegador de registros: toda tela lista alguma coisa.
- **EmptyState** — listas vazias são rotina e não podem parecer erro.
- **Breadcrumbs** — telas de detalhe precisam de volta explícita.

---

## Ressalvas

1. **Fontes reais ausentes.** Archivo + JetBrains Mono são substituições. Envie os arquivos `.woff2` da marca e o `tokens/fonts.css` passa a ter `@font-face` de verdade.
2. **Ícones reais ausentes.** Lucide é substituição sinalizada.
3. **Produto inferido.** O contexto do Portal Atto (portal de solicitações/assinaturas em pt‑BR) é uma hipótese; confirme ou corrija.
4. **Sem fotografia ou ilustração de marca.** Nada foi desenhado ou gerado — onde entraria imagem, o sistema usa tipo, cor e geometria.
5. **Cores semânticas autorais.** Verde/laranja/vermelho/azul foram harmonizados ao amarelo da marca; não vieram de um guia oficial.
