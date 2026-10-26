import { StrictMode, createElement } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root')!;
const app = createElement(
  StrictMode,
  null,
  createElement(App)
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
