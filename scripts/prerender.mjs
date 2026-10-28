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
  const [{ default: App }, { faqs, services }] = await Promise.all([
    vite.ssrLoadModule('/src/App.tsx'),
    vite.ssrLoadModule('/src/data.ts'),
  ]);
  const markup = renderToString(createElement(StrictMode, null, createElement(App)));
  let html = await readFile(outputPath, 'utf8');
  const rootElement = '<div id="root"></div>';

  if (!html.includes(rootElement)) {
    throw new Error(`Could not find the empty application root in ${outputPath}`);
  }

  html = html.replace(rootElement, `<div id="root">${markup}</div>`);

  const canonicalUrl = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!canonicalUrl) {
    throw new Error(`Could not find the canonical URL in ${outputPath}`);
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        url: `${canonicalUrl}#faq`,
        isPartOf: { '@id': `${canonicalUrl}#webpage` },
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'ItemList',
        '@id': `${canonicalUrl}#services`,
        name: 'Web development services',
        url: `${canonicalUrl}#services`,
        itemListElement: services.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Service',
            '@id': `${canonicalUrl}#service-${service.id}`,
            name: service.title,
            serviceType: service.title,
            description: service.description,
            provider: { '@id': `${canonicalUrl}#person` },
          },
        })),
      },
    ],
  };
  const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c');
  const structuredDataScript = `<script id="content-structured-data" type="application/ld+json">${structuredDataJson}</script>`;

  if (!html.includes('</head>')) {
    throw new Error(`Could not find the closing head tag in ${outputPath}`);
  }
  html = html.replace('</head>', `${structuredDataScript}</head>`);

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
