import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      // { find: "@components", replacement: "./src/components/" },
      // { find: "@contexts", replacement: "./src/contexts" },
      // { find: "@pages", replacement: "./src/pages" },
      // { find: "@hooks", replacement: "./src/hooks" },
      // { find: "@utils", replacement: "./src/utils" },
      // { find: "@types", replacement: "./src/types" },
      // { find: "@assets", replacement: "./src/assets" },
    ],
  },
});
