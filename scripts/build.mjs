import { build } from "esbuild";
import { mkdir, rm, writeFile } from "node:fs/promises";

console.log("clean dist");
await rm("dist", { recursive: true, force: true });
await mkdir("dist/assets", { recursive: true });

console.log("bundle app");
await build({
  entryPoints: ["src/main.tsx"],
  bundle: true,
  format: "esm",
  splitting: false,
  sourcemap: false,
  minify: true,
  outdir: "dist/assets",
  loader: {
    ".css": "css",
  },
});

console.log("write html");
await writeFile(
  "dist/index.html",
  `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>THE HUMAN EXCHANGE</title>
    <link rel="stylesheet" href="./assets/main.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./assets/main.js"></script>
  </body>
</html>
`,
);
console.log("done");
