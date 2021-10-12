import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import esbuild from 'rollup-plugin-esbuild';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

/** @type { import('rollup').RollupOptions } */
export default [
  {
    input: ['./src/main.js'],
    output: {
      dir: 'dist',
      chunkFileNames: production ? "chunks/[name]-[hash].js" : "chunks/[name].js",
      format: 'es',
      sourcemap: !production
    },
    watch: { buildDelay: 0 },
    treeshake: production,
    external: [
      'tslib', 'bootstrap', '@popperjs/core',
      'zone.js', 'rxjs', 'rxjs/operators',
      '@angular/core', '@angular/compiler', '@angular/common',
      '@angular/common/http', '@angular/forms',
      '@angular/animations','@angular/animations/browser',
      '@angular/platform-browser', '@angular/platform-browser/animations',
      '@angular/platform-browser-dynamic',
      '@angular/router', '@angular/localize', '@angular/localize/init',
      '@angular/common/locales/zh-Hans',
      '@angular/common/locales/extra/zh-Hans',
      'app-shared'
    ],
    plugins: [
      esbuild({ tsconfig: 'tsconfig.json', sourceMap: !production, minify: !!production }),
      scss({
        output: 'dist/main.css', sass: require('sass'), sourceMap: !production,
        outputStyle: !production ? 'expanded' : 'compressed'
      }),
      alias({}),
      nodeResolve({}),
      commonjs({})
    ],
    preserveEntrySignatures: false
  },
  {
    input: 'dist/app-shared/fesm2015/app-shared.js',
    output: {
      file: 'dist/app-shared.js',
      format: 'es',
      sourcemap: !production
    },
    watch: { buildDelay: 0 },
    treeshake: production,
    external: ['@angular/core', '@angular/core'],
    plugins: [
      esbuild({ tsconfig: 'tsconfig.json', sourceMap: !production, minify: !!production })
    ]
  }
]
