import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { svelteInspector } from "@sveltejs/vite-plugin-svelte-inspector";
import typescript2 from "rollup-plugin-typescript2";
import sveltePreProcess from "svelte-preprocess";
import { cssModules, linearPreprocess } from "svelte-preprocess-cssmodules";
import autoprefixer from "autoprefixer";
import progress from "vite-plugin-progress";

export default defineConfig({
  plugins: [
    svelteInspector(),
    typescript2(),
    progress(),
    svelte({
      preprocess: linearPreprocess([
        //线性处理css 模块化
        sveltePreProcess({
          postcss: {
            plugins: [autoprefixer()],
          },
        }),
        //设置默认的css为scoped
        cssModules({
          mode: "scoped",
          useAsDefaultScoping: true,
        }),
      ]),
      compilerOptions: {
        //定义css 类名的格式
        cssHash: ({ css, hash, name, filename }) => {
          return `ass-${hash(css)}`;
        },
      },
      //是否单独的生成一个css 文件(如果指定了compilerOptions 那么设置成false 的时候才会去走cssHash 的逻辑)
      emitCss: false,
      extensions: ["svelte"],
    }),
  ],
});
