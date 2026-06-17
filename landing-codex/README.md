# Landing React + Tailwind CSS

Landing page profesional creada con React, JavaScript, Vite y Tailwind CSS.

## Requisitos

- Node.js 18 o superior
- npm

## Instalacion

```bash
npm install
npm run dev
```

Luego abre la URL que muestra Vite en la terminal, normalmente:

```text
http://localhost:5173
```

## Estructura

```text
src/
  App.jsx
  main.jsx
  index.css
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    Services.jsx
    Testimonials.jsx
    Contact.jsx
    Footer.jsx
```

El formulario es solo visual: `onSubmit` ejecuta `preventDefault()` y no envia datos.

## Nota

El proyecto incluye `vite.config.js` con `@vitejs/plugin-react` para compilar JSX correctamente.
