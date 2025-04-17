# Vite React TypeScript Starter

A modern web application built with Vite, React, TypeScript, and TailwindCSS.

## 🚀 Features

- ⚡️ **Lightning Fast HMR** with [Vite](https://vitejs.dev/)
- ⚛️ **React 18** with TypeScript support
- 🎨 **TailwindCSS** for utility-first styling
- 🖼️ **Framer Motion** for smooth animations
- 📱 **Responsive Design** out of the box
- 🔍 **ESLint** for code linting
- 🎭 **Lucide React** for beautiful icons
- 🔄 **Intersection Observer** for scroll-based animations

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm (v7 or higher)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Rollsi/coffeestore/tree/main
cd coffeestore
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Development

To start the development server:
```bash
npm run dev
```
This will start the development server at `http://localhost:5173`

## 🏗️ Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🧱 Project Structure

```
project/
├── config/                 # Configuration files
│   ├── typescript/        # TypeScript configurations
│   │   ├── tsconfig.json
│   │   ├── tsconfig.node.json
│   │   └── tsconfig.app.json
│   └── tools/            # Tool configurations
│       ├── vite.config.ts
│       ├── postcss.config.js
│       ├── eslint.config.js
│       └── tailwind.config.js
├── src/                   # Source files
│   ├── components/       # React components
│   │   ├── Cart.tsx
│   │   └── Products.tsx
│   ├── styles/          # Stylesheets
│   │   └── index.css
│   ├── types/           # TypeScript type definitions
│   │   ├── types.ts
│   │   └── vite-env.d.ts
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Entry point
├── public/               # Static files
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── package-lock.json    # Lock file for dependencies
└── README.md           # Project documentation
```

## 🔧 Technologies Used

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer) - React implementation of the Intersection Observer API

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](your-repo-issues-url).

## 👥 Authors

- Robel Samuel
