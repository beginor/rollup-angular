import { createProgram, CompilerHost } from '@angular/compiler-cli';
import { CompilerOptions } from 'typescript';

export interface CompileOptions {
    id: string
    host: CompilerHost
    options: CompilerOptions
    files: Map<string, string>
}

export interface CompileResult {
    code: string;
    map?: string;
}

export function compile(opts: CompileOptions): CompileResult {
    const { id, host, options, files } = opts
    const program = createProgram({ rootNames: [id], options, host });
    program.emit();
    const file = id.replace('.ts', '');
    const map = files.get(`${file}.js.map`)
    const code = files.get(`${file}.js`)

    return {
        code: (code ?? '').replace(/\/\/# sourceMappingURL.*/, ''),
        map
    };
}
