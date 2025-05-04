# CustomFramework

**MyCustomFramework** — framework ligero, basado en **Web Standards** con un enfoque en **alta velocidad** y **mantenimiento escalable**

## Características principales

- 🔥 **Velocidad**: Sin dependencias pesadas ni runtimes adicionales.
- 🛡️ **Seguridad Avanzada**: Basado en las mejores prácticas y control total del código.
  (menos dependencias, sin manipulación insegura de DOM).Ofuscación y limpieza del código en producción.
- 🧩 **Arquitectura modular**: Dividido en múltiples Stores con Event Bus para máxima flexibilidad.
- 🌎 **Web Components nativos**: sin frameworks, sin limitaciones.
- 🎯 **Reactive State Engine**: Manejo de estado fluido y sincronizado.
- 🛠️ **Tooling moderno**:

  - **Bun** para la gestión de paquetes.
  - **esbuild** para build ultra-rápido, tree-shaking.
  - **javascript-obfuscator** ofuscador de código
  - **Husky** para ganchos de pre-commit y pre-push.
  - **Prettier + ESLint** para mantener el código limpio y consistente.

## Cómo empezar a probar el framwork local

antes de empezar debes de ejecutar el build del core CustomFramework

| Acción                        | Comando              |
| ----------------------------- | -------------------- |
| instalar dependencias         | `yarn install`       |
| Build solo minificado         | `bun run build`      |
| Build + Ofuscado (Producción) | `bun run build:prod` |

1 crea una carpeta para tu proyecto de prueba

```bash
cd ~/Desktop   # o donde quieras
mkdir test-custom-framework
cd test-custom-framework
```

2 Inicializa el proyecto usando Bun

```bash
  bun init
```

Responde:

```bash
  - Template: blank
  - Package name: test-custom-framework
  - Entry point: index.js
  - License: (lo que quieras)
```

3 Conecta tu framework en el proyecto:

```bash
  - bun link custom_framework
  - Esto va a instalar el custom_framework linkeado, como una dependencia local
```

4 crea un archivo index.html en raíz de tu proyecto

```bash
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Vanilla SPA</title>
    <link
      rel="stylesheet"
      href="./node_modules/custom_framework/dist/main.css"
    />
    <script
      type="module"
      src="./node_modules/custom_framework/dist/main.js"
    ></script>
  </head>
  <body>
    <div id="app">JC</div>
  </body>
</html>
```

5 en tu terminal escribe

```bash
bunx serve
```

## 📂 Estructura del Proyecto

```bash
/my-app
src/
├── assets/               # Recursos estáticos compartidos (fonts, imágenes base)
│   ├── fonts/
│   ├── images/
│   └── styles/           # Estilos base/core (variables, reset, mixins)
│
├── core/                 # El core de framework
│   ├── components/       # Componentes base (UI)
│   │   ├── layout/       # Layout system
│   │   ├── ui/           # Buttons, inputs, etc.
│   │   └── index.js      # Exportación centralizada
│   │
│   ├── sdk/
│   │   ├── dom.js            # Funciones base, SDK de utilidades DOM (GI, GN, etc.)
│   │   ├── events.js         # Helpers para eventos
│   │   ├── styles.js         # Manipulación de estilos
│   │   ├── store/            # State management
│   │   └── index.js          # Exportación unificada│
├── router/               # Sistema de enrutamiento
│   ├── guards/           # Middlewares de ruta
│   ├── routes/           # Definiciones de rutas base
│   └── Router.js         # Núcleo del router
│
├── /dist
│    ├── main.js
│    └── main.css
├── bun.lockb
├── package.json
└── README.md
```
