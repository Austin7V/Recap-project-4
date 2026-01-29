import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/contrast": {
        target: "https://www.aremycolorsaccessible.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/contrast/, "/api"),
      },
    },
  },
});
