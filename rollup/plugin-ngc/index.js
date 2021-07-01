/* eslint-disable max-len */
import { resolve } from 'path';
import optimizer from '@angular-devkit/build-optimizer/src/build-optimizer/rollup-plugin';
import { createCompilerHost, readConfiguration } from '@angular/compiler-cli';
import { resolver } from './resolver';
import { compile } from './compile';
import { defaultSideEffects } from './optimizer';
export function ngc(options) {
    var files = new Map();
    var host;
    var sideEffectFreeModules;
    var config = readConfiguration((options === null || options === void 0 ? void 0 : options.config) || 'tsconfig.json');
    return {
        name: 'ngc',
        buildStart: function () {
          debugger;
            var _a;
            sideEffectFreeModules = defaultSideEffects((_a = options === null || options === void 0 ? void 0 : options.buildOptimizer) === null || _a === void 0 ? void 0 : _a.sideEffectFreeModules);
            host = createCompilerHost({ options: config.options });
            host.writeFile = function (fileName, contents) {
                files.set(fileName, contents);
            };
        },
        resolveId: resolver(),
        transform: function (code, id) {
          debugger;
            var _a;
            if (!id.includes('node_modules')) {
                return compile({ id: resolve(id).replace(/\\/g, '/'), host: host, options: config.options, files: files });
            }
            return optimizer({
                sideEffectFreeModules: sideEffectFreeModules,
                angularCoreModules: (_a = options === null || options === void 0 ? void 0 : options.buildOptimizer) === null || _a === void 0 ? void 0 : _a.angularCoreModules
            }).transform(code, id);
        }
    };
}
