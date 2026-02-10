# Air Framework Documentation

This is the official documentation site for the [Air Framework](https://github.com/AndreyDAraya/air-framework), built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/).

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.14.1 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository (if you haven't already):

    ```bash
    git clone git@github.com:AndreyDAraya/air-doc.git
    cd air-doc
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Development

Start the local development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

### Production Build

To build the static site:

```bash
npm run build
```

The output will be in the `dist/` directory. You can preview the production build locally:

```bash
npm run preview
```

## 🛠 Features

- **Built with Starlight**: Professional documentation UI out of the box.
- **MDX Support**: Use React components in your Markdown.
- **Mermaid Diagrams**: Architectural diagrams rendered directly from code.
- **Pagefind Search**: Fast, client-side search (available in production builds).
- **Dark/Light Mode**: Automatic theme switching.

## 📁 Project Structure

- `src/content/docs/`: All documentation pages (.mdx).
- `src/assets/`: Images and other static assets used in docs.
- `public/`: Static assets like favicons.
- `astro.config.mjs`: Main configuration file including navigation sidebar.

## 📄 License

This project is part of the Air Framework ecosystem.
