# MyCustomFramework

**MyCustomFramework** — framework ligero, basado en **Web Standards** con un enfoque en **alta velocidad** y **mantenimiento escalable**

## Características principales

- 🔥 **Velocidad extrema**: Sin dependencias pesadas ni runtimes adicionales.
- 🛡️ **Seguridad Avanzada**: Basado en las mejores prácticas y control total del código.
  (menos dependencias, sin manipulación insegura de DOM).Ofuscación y limpieza del código en producción.
- 🧩 **Arquitectura modular**: Dividido en múltiples Stores con Event Bus para máxima flexibilidad.
- 🌎 **Web Components nativos**: sin frameworks, sin limitaciones.
- 🎯 **Reactive State Engine**: Manejo de estado fluido y sincronizado.
- 🛠️ **Tooling moderno**:

  - **Bun** para la gestión de paquetes.
  - **esbuild** para build ultra-rápido, tree-shaking y ofuscación.
  - **Husky** para ganchos de pre-commit y pre-push.
  - **Prettier + ESLint** para mantener el código limpio y consistente.

## Cómo empezar

```bash
bun create mycustomframework my-app
cd my-app
bun install
bun run dev
```

## 📂 Estructura del Proyecto

```bash
/my-app
 ├── /src
 │    ├── /router
 │    ├── /views
 │    ├── /components
 │    ├── /layouts
 │    ├── /assets
 │         ├── /fonts
 │         └── /img
 │    ├── main.js
 │    └── styles.css
 ├── /build
 │    ├── app.js
 │    └── styles.css
 ├── bun.lockb
 ├── package.json
 └── README.md
```
