import { createProgram } from '@angular/compiler-cli';
export function compile(opts) {
    var id = opts.id, host = opts.host, options = opts.options, files = opts.files;
    var program = createProgram({ rootNames: [id], options: options, host: host });
    program.emit();
    var file = id.replace('.ts', '');
    var map = files.get(file + ".js.map");
    var code = files.get(file + ".js");
    debugger;
    var result = {
        code: (code !== null && code !== void 0 ? code : '').replace(/\/\/# sourceMappingURL.*/, ''),
        map: map
    };
    return result;
}
