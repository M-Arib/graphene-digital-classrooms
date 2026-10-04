import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { pages, canonicalUrl } from "./src/data/seo";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * After the build, write one HTML file per route (e.g. dist/about.html) with that
 * page's title, description, canonical and social tags baked in, so search engines
 * and link previews (WhatsApp, Facebook, LinkedIn) see the right metadata without
 * running JavaScript. Also generates dist/sitemap.xml.
 */
function seoPrerender(): Plugin {
  let outDir = "dist";
  return {
    name: "seo-prerender",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const template = fs.readFileSync(path.join(outDir, "index.html"), "utf-8");

      const replaceTag = (html: string, pattern: RegExp, replacement: string) => {
        if (!pattern.test(html)) throw new Error(`seo-prerender: tag not found ${pattern}`);
        return html.replace(pattern, replacement);
      };

      for (const page of pages) {
        const title = escapeHtml(page.title);
        const description = escapeHtml(page.description);
        const url = canonicalUrl(page.path);

        let html = template;
        html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`);
        html = replaceTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`);
        html = replaceTag(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
        html = replaceTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
        html = replaceTag(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`);
        html = replaceTag(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`);
        html = replaceTag(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`);
        html = replaceTag(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`);

        const file = page.path === "/" ? "index.html" : `${page.path.slice(1)}.html`;
        fs.writeFileSync(path.join(outDir, file), html);
      }

      const today = new Date().toISOString().slice(0, 10);
      const urls = pages
        .map(
          (p) =>
            `  <url>\n    <loc>${canonicalUrl(p.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority.toFixed(1)}</priority>\n  </url>`,
        )
        .join("\n");
      fs.writeFileSync(
        path.join(outDir, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );
    },
  };
}

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [react(), seoPrerender()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          ui: ["lucide-react", "sonner", "next-themes"],
          motion: ["framer-motion"],
        },
      },
    },
  },
});
