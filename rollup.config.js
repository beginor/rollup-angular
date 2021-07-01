import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import { terser } from 'rollup-plugin-terser';
import { ngcPlugin } from 'rollup-plugin-ngc';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

/** @type { import('rollup').RollupOptions } */
export default {
  input: ['./src/main.ts'],
  output: {
    dir: 'dist',
    chunkFileNames: production ? "chunks/[name]-[hash].js" : "chunks/[name].js",
    format: 'es',
    sourcemap: !production
  },
  watch: { buildDelay: 500 },
  treeshake: production,
  external: [
    'tslib', 'bootstrap', '@popperjs/core'
  ],
  plugins: [
    // typescript({ tsconfig: 'tsconfig.json', sourceMap: !production }),
    ngcPlugin({ rootDir: './src' }),
    css({ output: 'main.css' }),
    alias({}),
    nodeResolve({ mainFields: ['module', 'main'] }),
    commonjs({
      include: []
    }),
    production && terser({
      format: {
        ascii_only: true,
        comments: false,
        webkit: true
      },
      compress: {
        pure_getters: true,
        passes: 3,
        global_defs: {
          ngDevMode: false
        }
      }
    })
  ],
  preserveEntrySignatures: false
}
