import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "slick-carousel/slick/slick.css"; @import "slick-carousel/slick/slick-theme.css";`,
      },
    },
  },
  build: {
    sourcemap: false, // Disables source maps in production
  },
});
