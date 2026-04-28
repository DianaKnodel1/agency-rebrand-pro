// Standalone Vite-Config für statisches SPA-Hosting (z. B. nginx auf einem VPS).
// Bewusst unabhängig von vite.config.ts, damit der Lovable-Editor (Cloudflare/SSR)
// und der externe Static-Build nebeneinander existieren können.
//
// Lokal/auf dem VPS bauen:
//   npm run build:vps
// Ergebnis: dist/index.html + dist/assets/* — direkt durch nginx ausserlieferbar.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "src/routes",
      generatedRouteTree: "src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
