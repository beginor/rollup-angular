import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import esbuild from 'rollup-plugin-esbuild';
import replace from "@rollup/plugin-replace";

// `pnpm run build` -> `production` is true
// `pnpm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

/** @type { import('rollup').RollupOptions } */
export default {
  input: [
    './projects/web/out-tsc/main.js'
  ],
  output: {
    dir: 'dist',
    chunkFileNames: production ? "chunks/[name]-[hash].js" : "chunks/[name].js",
    format: 'es',
    sourcemap: !production
  },
  watch: { clearScreen: false },
  treeshake: production,
  external: [
    'tslib', 'bootstrap', '@popperjs/core',
    'zone.js', /rxjs/, /@angular/, /@ng-bootstrap/,
    /ng-zorro-antd/
  ],
  plugins: [
    esbuild({ tsconfig: 'tsconfig.json', sourceMap: !production, minify: production, legalComments: 'none' }),
    scss({
      output: 'dist/main.css', sass: require('sass'), sourceMap: !production,
      outputStyle: !production ? 'expanded' : 'compressed'
    }),
    alias({
      entries: [
        { find: 'app-shared', replacement: './dist/app-shared/fesm2020/app-shared.mjs' }
      ]
    }),
    replace({
      preventAssignment: true,
      values: {
        'ng-zorro-antd/button': 'ng-zorro-antd',
        'ng-zorro-antd/core/wave': 'ng-zorro-antd',
        'ng-zorro-antd/core/transition-patch': 'ng-zorro-antd',
        'ng-zorro-antd/layout': 'ng-zorro-antd',
        'ng-zorro-antd/table': 'ng-zorro-antd',
        'ng-zorro-antd/menu': 'ng-zorro-antd',
      }
    }),
    nodeResolve({}),
    commonjs({})
  ],
  preserveEntrySignatures: false
}
