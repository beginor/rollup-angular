import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: './node_modules/@angular/common/locales/zh-Hans.js',
    output: {
      format: 'esm',
      sourcemap: false,
      file: 'dist/libs/@angular/common/locales/zh-Hans.js'
    },
    external: [],
    plugins: [
      commonjs()
    ]
  },
  {
    input: './node_modules/@angular/common/locales/extra/zh-Hans.js',
    output: {
      format: 'esm',
      sourcemap: false,
      file: 'dist/libs/@angular/common/locales/extra/zh-Hans.js'
    },
    external: [],
    plugins: [
      commonjs()
    ]
  }
]
