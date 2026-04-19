# Atlas — Landing Page

Landing page institucional da Atlas (Infraestrutura de Inteligência).

## Stack

- HTML estático multi-página
- React 18 (via CDN unpkg, build de produção)
- JSX transpilado em runtime via Babel Standalone
- CSS puro (`styles.css`)

## Estrutura

- `index.html` — home
- `sobre.html`, `servicos.html`, `diagnostico.html`, `contato.html` — páginas internas
- `shared.jsx` — header, footer, componentes compartilhados
- `home.jsx` — componentes da home
- `pages.jsx` — componentes das páginas internas
- `styles.css` — estilos globais

## Desenvolvimento local

Qualquer servidor HTTP estático serve:

```bash
python3 -m http.server 8000
# ou
npx serve .
```

Abrir `http://localhost:8000`.

## Deploy

Publicado via AWS Amplify Hosting a partir do branch `main` (config: `amplify.yml`).
