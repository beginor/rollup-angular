var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { readdirSync } from 'fs';
import { join } from 'path';
/* eslint-disable max-len */
export var defaultSideEffects = function (sideEffectFreeModules) {
    var sideEffects = readdirSync('node_modules/@angular')
        .map(function (effect) { return join('node_modules/@angular', effect); });
    return __spreadArray(__spreadArray(__spreadArray([], sideEffects), [
        'node_modules/rxjs'
    ]), (sideEffectFreeModules !== null && sideEffectFreeModules !== void 0 ? sideEffectFreeModules : [])).map(function (p) { return p.replace(/\\/g, '/'); });
};
