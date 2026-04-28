import { cp, mkdir, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(rootDir, '..');
const docsDir = path.join(projectDir, 'docs');
const distDocsDir = path.join(projectDir, 'dist', 'docs');

async function main() {
  await mkdir(distDocsDir, { recursive: true });
  await cp(docsDir, distDocsDir, { recursive: true });

  const entries = await readdir(docsDir);
  const links = entries
    .filter((entry) => entry.endsWith('.md'))
    .sort()
    .map((entry) => `<li><a href="./${entry}">${entry}</a></li>`)
    .join('');

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BridgeKit Documentation</title>
    <style>
      :root {
        color-scheme: light;
        font-family: "Avenir Next", "Segoe UI", sans-serif;
        background: #f5f4ef;
        color: #1f2b24;
      }

      body {
        margin: 0;
        padding: 48px 20px;
      }

      main {
        margin: 0 auto;
        max-width: 720px;
      }

      h1 {
        font-family: "Iowan Old Style", Georgia, serif;
        font-size: clamp(2.5rem, 4vw, 3.5rem);
        margin-bottom: 0.5rem;
      }

      ul {
        line-height: 1.9;
      }

      a {
        color: #005f78;
      }
    </style>
  </head>
  <body>
    <main>
      <p>BridgeKit</p>
      <h1>Documentation</h1>
      <p>These notes describe the design-system decisions behind the demo system and the review queue example.</p>
      <ul>${links}</ul>
    </main>
  </body>
</html>`;

  await writeFile(path.join(distDocsDir, 'index.html'), html, 'utf8');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
