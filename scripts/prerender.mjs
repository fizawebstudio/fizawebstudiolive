import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createElement, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const root = process.cwd();
const outputPath = resolve(root, 'dist/index.html');
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx');
  const markup = renderToString(createElement(StrictMode, null, createElement(App)));
  let html = await readFile(outputPath, 'utf8');
  const rootElement = '<div id="root"></div>';

  if (!html.includes(rootElement)) {
    throw new Error(`Could not find the empty application root in ${outputPath}`);
  }

  html = html.replace(rootElement, `<div id="root">${markup}</div>`);

  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') {
    html = html.replace(
      '<meta name="robots" content="index, follow" />',
      '<meta name="robots" content="noindex, nofollow" />'
    );
  }

  await writeFile(outputPath, html);
} finally {
  await vite.close();
}
