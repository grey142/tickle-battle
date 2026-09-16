import { defineConfig } from "vite";

export default defineConfig({
  // Relative URLs so GitHub Pages / any static host can serve /dist without a fixed base path.
  base: "./",
  server: {
    host: "0.0.0.0",
    port: 43180,
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 43180,
    strictPort: true,
  },
});
