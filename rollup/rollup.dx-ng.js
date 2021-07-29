import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

/** @type { import('rollup').RollupOptions } */
export default [{
  input: ['./node_modules/devextreme-angular/fesm2015/devextreme-angular.js'],
  output: {
    file: 'dist/libs/dx/devextreme-angular.js',
    format: 'es',
    sourcemap: !production
  },
  treeshake: false,
  external: [
    'tslib','@angular/core', '@angular/compiler', '@angular/common',
    '@angular/common/http', '@angular/forms',
    '@angular/animations','@angular/animations/browser',
    '@angular/platform-browser', '@angular/platform-browser/animations',
    '@angular/platform-browser-dynamic',
    '@angular/router', '@angular/localize', 'jszip', 'devexpress-diagram',
    'devexpress-gantt', 'devextreme-quill', 'devextreme/bundles/dx.all'
  ],
  plugins: [
    nodeResolve()
  ]
}, {
  input: ['./node_modules/devextreme-angular/fesm2015/devextreme-angular.js'],
  output: {
    file: 'dist/libs/dx/devextreme-angular.prod.js',
    format: 'es',
    sourcemap: !production
  },
  treeshake: false,
  external: [
    'tslib','@angular/core', '@angular/compiler', '@angular/common',
    '@angular/common/http', '@angular/forms',
    '@angular/animations','@angular/animations/browser',
    '@angular/platform-browser', '@angular/platform-browser/animations',
    '@angular/platform-browser-dynamic',
    '@angular/router', '@angular/localize', 'jszip', 'devexpress-diagram',
    'devexpress-gantt', 'devextreme-quill', 'devextreme/bundles/dx.all'
  ],
  plugins: [
    nodeResolve(),
    terser({ format: { comments: false }})
  ]
}]
