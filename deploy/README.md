# Portal Atto

Site institucional estático. Sem build, sem dependências de servidor.

## Páginas

| Arquivo | URL | Conteúdo |
| --- | --- | --- |
| `index.html` | `/` | Home com carrossel de vídeo, atas e formulário |
| `produtos.html` | `/produtos` | Catálogo de itens registrados, com filtro |
| `ata.html` | `/ata` | Página de ata/projeto — Sala multissensorial |
| `quem-somos.html` | `/quem-somos` | Institucional |

## Publicar na Vercel

Conecte este repositório em vercel.com/new. Nas configurações do projeto:

- Framework Preset: **Other**
- Build Command: *(vazio)*
- Output Directory: *(vazio — raiz)*

O `vercel.json` já ativa URLs sem `.html` e cache longo para `assets/` e `_ds/`.

Pela CLI:

```bash
npm i -g vercel
vercel --prod
```

## Estrutura

```
assets/brand/   logotipos
assets/img/     fotos de produtos e projetos entregues
assets/video/   vídeos do carrossel da home
_ds/            design system (tokens, componentes)
support.js      runtime das páginas
```

## Manutenção

Os vídeos somam ~20 MB e carregam sob demanda (só o slide visível baixa).
Antes de campanhas com tráfego alto, vale comprimi-los para 2–3 MB cada.
