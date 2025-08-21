# 🚀 EvolvIA — Landing Page Estratégica - ## 📌 **Última actualización:** [21/08/2025]

**EvolvIA** es una landing page minimalista, rápida y modular, desarrollada con **Astro 5**, **Tailwind CSS** y un diseño estratégico basado en la identidad y narrativa de la marca.

> **“No se trata de vender soluciones, sino de activar saltos evolutivos.”**

---

## 🧩 **Sobre el proyecto**

Este repositorio forma parte de un proyecto freelance que combina **diseño estratégico**, **arquitectura de contenido** y una capa futura de **IA cognitiva**.

- **Cliente:** EvolvIA (Bogotá, Colombia)
- **Desarrollador:** Franz Seidel — Diseñador y Frontend Developer Freelance
- **Stack:** Astro, Tailwind CSS, AstroWind
- **Objetivo:** Construir una landing escalable, clara y lista para iterar con inteligencia artificial.
- **Estado actual:** Etapa 1 finalizada: tipografías, estructura modular, footer y rutas legales listos.
- **Próxima etapa:** Integración de IA para diagnóstico organizacional estratégico.

---

## 🎨 **Características clave**

- ⚡ **Desempeño optimizado:** arquitectura estática con Astro.
- 📱 **100% Responsive:** mobile-first con Tailwind CSS.
- 🔗 **SEO Ready:** rutas claras (`navigation.ts`) y metadatos bien configurados.
- ✏️ **Componentes modulares:** Hero, Features, CTA, Footer, legales.
- 📚 **Documentación interna:** Tipografías, colores y estilos versionados.
- 🇨🇴 **Adaptado a Colombia:** documentos legales reales (`Términos` y `Privacidad`) redactados en español.

---

## 🗂️ **Estructura del proyecto**

```bash
src/
├── components/      # Componentes Astro y UI reutilizables
├── layouts/         # Layout principal (Header, Footer, PageLayout)
├── pages/           # Rutas del sitio (index.astro, legales .md)
├── assets/          # Imágenes, logos, íconos
└── utils/           # Permalinks y helpers
```

---

## ⚙️ **Cómo levantar localmente**

```bash
# Clona este repo
git clone https://github.com/franz8818/EvolvIA-landing-page.git

# Entra a la carpeta
cd EvolvIA-landing-page

# Instala dependencias
npm install

# Levanta entorno dev
npm run dev
```

---

## ✏️ **Licencia**

Uso restringido: código abierto, pero derechos reservados para uso comercial del cliente EvolvIA.  
Para contribuciones, mejoras o consultas **contáctame primero**.

---

## 👨‍💻 **Contacto**

- 🌐 Portafolio: ()
- ✉️ Email: franz8818@gmail.com
- 🧑‍💻 GitHub: [@franz8818](https://github.com/franz8818)

---

## 🌈 **Sistema de color**

Variables CSS (`CustomStyles.astro`)

```CSS
:root {
  --aw-color-primary: #00cfe5;               /* Color principal: botones, enlaces destacados */
  --aw-color-secondary: #f628a7;            /* Hover, enlaces secundarios */
  --aw-color-accent: rgb(109, 40, 217);     /* Detalles visuales: bordes, líneas */
  --aw-color-button-emerald: #144c43;       /* Fondo de botón tipo esmeralda */

  --aw-color-text-heading: rgb(0 0 0);
  --aw-color-text-default: rgb(16 16 16);
  --aw-color-text-muted: rgb(16 16 16 / 66%);

  --aw-color-bg-page: rgb(255 255 255);          /* Fondo blanco */
  --aw-color-bg-page-dark: #111827;            /* Fondo oscuro general */
  --aw-color-page-tree: #03292c;               /* Fondo para sección Features2 */
}
```

## 🛠️ Clases Personalizadas (`tailwind.css`)

```css
@layer utilities {
  .bg-page {
    background-color: var(--aw-color-bg-page);
  }
  .bg-dark {
    background-color: var(--aw-color-bg-page-dark);
  }
  .bg-radial-grey {
    background: radial-gradient(circle at center, #1a1a1a 0%, #0d0d0d 100%);
  }
  .bg-emerald {
    background-color: var(--aw-color-button-emerald);
  }
}

```
## 🎨 Paleta Visual (Resumen)

| Nombre             | Token                        | Color              | Uso principal                           |
|--------------------|------------------------------|---------------------|------------------------------------------|
| Primario           | `--aw-color-primary`         | `#00cfe5`           | Botones, enlaces destacados              |
| Secundario         | `--aw-color-secondary`       | `#f628a7`           | Hover, interacción secundaria            |
| Acento             | `--aw-color-accent`          | `rgb(109, 40, 217)` | Bordes, decoración simbiótica            |
| Botón esmeralda    | `--aw-color-button-emerald`  | `#144c43`           | Botón estilo profundo y elegante         |
| Texto principal    | `--aw-color-text-default`    | `rgb(16, 16, 16)`   | Cuerpo del texto                         |
| Texto atenuado     | `--aw-color-text-muted`      | `rgb(16, 16, 16 / 66%)` | Texto secundario                       |
| Fondo claro        | `--aw-color-bg-page`         | `#ffffff`           | Fondo base general                       |
| Fondo oscuro       | `--aw-color-bg-page-dark`    | `#111827`           | Secciones profundas o modo oscuro        |
| Fondo Features2    | `--aw-color-page-tree`       | `#03292c`           | Sección "¿Qué hacemos?"                  |

---

## 🔤 **Tipografías**

**Fuentes base:** Montserrat (cuerpo) y Poppins (headings).  
Configuración 100% documentada en [`tailwind.config.js`](./tailwind.config.js) y `CustomStyles.astro`.  
Para más detalle revisa `TYPOGRAPHY.md` _(opcional)_.

---

**Por Franz Seidel** ✨
