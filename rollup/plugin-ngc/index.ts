/* eslint-disable max-len */
import { resolve } from 'path';
import optimizer, { Options as OptimizerOptions } from '@angular-devkit/build-optimizer/src/build-optimizer/rollup-plugin';
import { createCompilerHost, readConfiguration, CompilerHost } from '@angular/compiler-cli';


import { Plugin } from 'rollup';

import { resolver } from './resolver';
import { compile } from './compile';
import { defaultSideEffects } from './optimizer';

export interface Options {
    rootDir?: string;
    sourceMap?: boolean;
    target?: string;
    buildOptimizer?: OptimizerOptions,
    config: string;
}


export function ngc(options?: Options): Plugin {

    const files = new Map();

    let host: CompilerHost;
    let sideEffectFreeModules: string[];

    const config = readConfiguration(options?.config || 'tsconfig.json');

    return {
        name: 'ngc',
        buildStart: (): void => {
            sideEffectFreeModules = defaultSideEffects(options?.buildOptimizer?.sideEffectFreeModules);
            host = createCompilerHost({ options: config.options });
            host.writeFile = (fileName: string, contents: string): void => {
                files.set(fileName, contents);
            }
        },
        resolveId: resolver(),
        transform(code: string, id: string): any {
            if (!id.includes('node_modules')) {
                return compile({ id: resolve(id).replace(/\\/g, '/'), host, options: config.options, files });
            }
            return optimizer({
                sideEffectFreeModules, angularCoreModules: options?.buildOptimizer?.angularCoreModules
            }).transform(code, id);
        }
    };
}
