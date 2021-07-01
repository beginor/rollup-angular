/* eslint-disable max-len */
import { join, dirname } from 'path';
import { existsSync, statSync } from 'fs';

export function resolver(extensions?: []): (id: string, origin: string | undefined) => string | undefined {
    const _extensions = ['ts', ...(extensions ?? [])];
    const resolveFile = (resolved: string, index = false): string | undefined => {
        for (const extension of _extensions) {
            const file = index
                ? join(resolved, `index.${extension}`)
                : `${resolved}.${extension}`
            if (existsSync(file)) {
                return file;
            }
        }
        return undefined;
    }

    return function resolveId(id: string, origin: string | undefined) : string | undefined {
        if (!origin || id.includes('node_modules')) return id
        const resolved = join(dirname(origin), id)
        const file = resolveFile(resolved)
        if (file) {
            return file;
        }
        if (existsSync(resolved) && statSync(resolved).isDirectory()) {
            const coreFile = resolveFile(resolved, true)
            if (coreFile) {
                return coreFile;
            }
        }
        return undefined;
    }
}
