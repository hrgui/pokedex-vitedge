import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vitedgePlugin from "vitedge/plugin.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vitedgePlugin(), reactRefresh()],
});
