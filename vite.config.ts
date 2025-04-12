import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Vite config for both local and production environments
export default defineConfig(({ mode }) => ({
  // Base URL handling for both local and production (GitHub Pages)
  base: mode === "production" ? "/career-canvas-project/" : "/",

  // Local development server settings
  server: {
    host: "0.0.0.0",  // Ensures it works locally, can be adjusted if needed
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  // Path resolution for the alias "@"
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
