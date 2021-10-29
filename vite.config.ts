import { defineConfig } from "vite";

const { NODE_ENV } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  base: NODE_ENV === "production"
    ? "https://ghaerdi.github.io/rain-background/"
    : "/",
});
