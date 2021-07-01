var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
/* eslint-disable max-len */
import { join, dirname } from 'path';
import { existsSync, statSync } from 'fs';
export function resolver(extensions) {
    var _extensions = __spreadArray(['ts'], (extensions !== null && extensions !== void 0 ? extensions : []));
    var resolveFile = function (resolved, index) {
        if (index === void 0) { index = false; }
        for (var _i = 0, _extensions_1 = _extensions; _i < _extensions_1.length; _i++) {
            var extension = _extensions_1[_i];
            var file = index
                ? join(resolved, "index." + extension)
                : resolved + "." + extension;
            if (existsSync(file)) {
                return file;
            }
        }
        return undefined;
    };
    return function resolveId(id, origin) {
        if (!origin || id.includes('node_modules'))
            return id;
        var resolved = join(dirname(origin), id);
        var file = resolveFile(resolved);
        if (file) {
            return file;
        }
        if (existsSync(resolved) && statSync(resolved).isDirectory()) {
            var coreFile = resolveFile(resolved, true);
            if (coreFile) {
                return coreFile;
            }
        }
        return undefined;
    };
}
