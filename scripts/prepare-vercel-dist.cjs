const fs = require("node:fs");
const path = require("node:path");

const distDir = path.resolve(__dirname, "..", "dist");
const source = path.join(distDir, "index.vercel.html");
const target = path.join(distDir, "index.html");

if (!fs.existsSync(source)) {
  throw new Error("Missing dist/index.vercel.html. Run the Vercel Vite build first.");
}

fs.copyFileSync(source, target);
