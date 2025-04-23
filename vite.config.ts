
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Vite config for both local and production environments
export default defineConfig(({ mode }) => ({
  // Base URL handling for both local and production (GitHub Pages)
  base: "/",

  // Local development server settings
  server: {
    host: "localhost",
    port: 3000,
    strictPort: false, // This allows Vite to try alternative ports if 3000 is in use
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
