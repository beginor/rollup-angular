import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  createRollupConfig({
    input: './node_modules/rxjs/_esm2015/index.js',
    output: 'dist/libs/rxjs/rxjs.js',
  }),
  createRollupConfig({
    input: './node_modules/rxjs/_esm2015/operators/index.js',
    output: 'dist/libs/rxjs/rxjs.operators.js',
    external: ['rxjs']
  }),
  createRollupConfig({
    input: './node_modules/rxjs/_esm2015/fetch/index.js',
    output: 'dist/libs/rxjs/rxjs.fetch.js',
    external: ['tslib']
  }),
  createRollupConfig({
    input: './node_modules/rxjs/_esm2015/ajax/index.js',
    output: 'dist/libs/rxjs/rxjs.ajax.js',
    external: ['tslib']
  }),
  createRollupConfig({
    input: './node_modules/rxjs/_esm2015/webSocket/index.js',
    output: 'dist/libs/rxjs/rxjs.webSocket.js',
    external: ['tslib']
  })
]

function createRollupConfig({ input, output, external = [] }) {
  return {
    input: input,
    output: {
      file: output,
      format: 'esm',
      sourcemap: false // !production
    },
    external: external,
    plugins: [
      nodeResolve({ }),
      terser({ format: { comments: false }})
    ]
  };
}
