import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import fs from "fs";
import path from "path";

// 🧠 Automatically read all route files inside src/pages or src/components
// (Adjust the folder path if your routes are elsewhere)
function getAllRoutes() {
  const routes = ["/"]; // Always include homepage
  const pagesDir = path.resolve("src");

  const addRoutesFromDir = (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        addRoutesFromDir(fullPath);
      } else if (file.endsWith(".jsx") || file.endsWith(".js")) {
        // derive URL route
        const name = file
          .replace(".jsx", "")
          .replace(".js", "")
          .toLowerCase();

        // Ignore common non-page files
        if (
          ["app", "main", "index", "footer", "header", "seo"].includes(name)
        ) {
          continue;
        }

        // Example: "CareerAfterPhD.jsx" → "/career-after-phd"
        const url = "/" + name.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
        routes.push(url);
      }
    }
  };

  addRoutesFromDir(pagesDir);
  return Array.from(new Set(routes));
}

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    sitemap({
      hostname: "https://www.narpavitechmumbai.in",
      dynamicRoutes: getAllRoutes(),
    }),
  ],
});
