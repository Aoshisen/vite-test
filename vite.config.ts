import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { svelteInspector } from "@sveltejs/vite-plugin-svelte-inspector";
import typescript2 from "rollup-plugin-typescript2";

export default defineConfig({
  plugins: [svelte(), svelteInspector(), typescript2()],
  resolve: {},
});
