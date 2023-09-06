import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { svelteInspector } from "@sveltejs/vite-plugin-svelte-inspector";
import typescript2 from "rollup-plugin-typescript2";
import sveltePreProcess from "svelte-preprocess";
import {cssModules,linearPreprocess} from "svelte-preprocess-cssmodules"
import autoprefixer from "autoprefixer"

export default defineConfig({
  plugins: [
    svelte({
      preprocess: 
      linearPreprocess([
        sveltePreProcess({
          postcss:{
            plugins:[autoprefixer()]
          },
        }),
        cssModules({
          mode:"scoped",
          useAsDefaultScoping:true,
        })
      ])
    ,
      compilerOptions: {
        cssHash: ({ css, hash, name, filename }) => {
          return `fx-${hash(css)}`;
        },
      },
      emitCss: false,
    }),
    svelteInspector(),
    typescript2(),
  ],
});
