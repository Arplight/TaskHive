import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["favicon.ico", "robots.txt", "manifest.json", "logo.svg"],
      manifest: {
        name: "Taskhive",
        short_name: "Taskhive",
        description: "A simple to-do app with task management features",
        theme_color: "#ffffffad",
        background_color: "#517ff6",
        icons: [
          {
            src: "./Logo/logo.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
          {
            src: "./Logo/logo.svg",
            sizes: "512x512",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
