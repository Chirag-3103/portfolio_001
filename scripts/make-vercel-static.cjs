const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const clientDir = path.join(distDir, "client");
const assetsDir = path.join(clientDir, "assets");
const rootAssetsDir = path.join(distDir, "assets");

if (!fs.existsSync(assetsDir)) {
  throw new Error("Missing dist/client/assets. Run vite build before this script.");
}

const assetFiles = fs.readdirSync(assetsDir);
const jsFiles = assetFiles
  .filter((file) => /^index-.+\.js$/.test(file))
  .sort();
const cssFiles = assetFiles
  .filter((file) => /^styles-.+\.css$/.test(file))
  .sort();

if (jsFiles.length === 0) {
  throw new Error("No client JavaScript entry files found in dist/client/assets.");
}

for (const file of fs.readdirSync(clientDir)) {
  const source = path.join(clientDir, file);
  const target = path.join(distDir, file);
  if (file === "assets" || !fs.statSync(source).isFile()) continue;
  fs.copyFileSync(source, target);
}

fs.rmSync(rootAssetsDir, { recursive: true, force: true });
fs.cpSync(assetsDir, rootAssetsDir, { recursive: true });

const stylesheetTags = cssFiles
  .map((file) => `    <link rel="stylesheet" href="/assets/${file}" />`)
  .join("\n");
const scriptTags = jsFiles
  .map((file) => `    <script type="module" src="/assets/${file}"></script>`)
  .join("\n");

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Chirag Kumar - Portfolio</title>
    <meta
      name="description"
      content="Cinematic portfolio of Chirag Kumar - frontend developer crafting bold, minimal, purposeful experiences."
    />
    <link rel="icon" type="image/png" href="/favicon.png" />
${stylesheetTags}
  </head>
  <body>
    <div id="root"></div>
${scriptTags}
  </body>
</html>
`;

fs.writeFileSync(path.join(distDir, "index.html"), html);
