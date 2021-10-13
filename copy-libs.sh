#!/bin/bash -e
rm -rf dist/libs && mkdir -p dist/libs
# tslib
mkdir dist/libs/tslib
cp -v node_modules/tslib/tslib.es6.js dist/libs/tslib/tslib.js
npx rollup -c rollup/rollup.tslib.js
# bootstrap-icons
cp -rv node_modules/bootstrap-icons/icons dist/libs/bootstrap-icons
# bootstrap
mkdir dist/libs/bootstrap
cp -v node_modules/bootstrap/dist/css/bootstrap.min.css dist/libs/bootstrap
cp -v node_modules/bootstrap/dist/js/bootstrap.esm.js dist/libs/bootstrap
cp -v node_modules/bootstrap/dist/js/bootstrap.esm.min.js dist/libs/bootstrap
# @popperjs/core
npx rollup -c rollup/rollup.popperjs.js
## rxjs
rm -rf dist/libs/rxjs && mkdir dist/libs/rxjs
npx rollup -c rollup/rollup.rxjs.js
## zone.js
rm -rf dist/libs/zone.js && mkdir dist/libs/zone.js
cp -v node_modules/zone.js/dist/zone.min.js dist/libs/zone.js
## angular
rm -rf dist/libs/@angular && mkdir dist/libs/@angular
mkdir dist/libs/@angular/core
cp -v node_modules/@angular/core/fesm2015/core.js dist/libs/@angular/core
npx esbuild --minify --legal-comments=external --charset=utf8 --log-level=error --outfile=dist/libs/@angular/core/core.prod.js dist/libs/@angular/core/core.js
mkdir dist/libs/@angular/compiler
cp -v node_modules/@angular/compiler/fesm2015/compiler.js dist/libs/@angular/compiler
npx esbuild --minify --legal-comments=external --charset=utf8 --log-level=error --outfile=dist/libs/@angular/compiler/compiler.prod.js dist/libs/@angular/compiler/compiler.js
mkdir dist/libs/@angular/common
cp -v node_modules/@angular/common/fesm2015/common.js dist/libs/@angular/common
npx esbuild --minify --legal-comments=external --charset=utf8 --log-level=error --outfile=dist/libs/@angular/common/common.prod.js dist/libs/@angular/common/common.js
cp -v node_modules/@angular/common/fesm2015/http.js dist/libs/@angular/common/http.js
npx esbuild --minify --legal-comments=external --charset=utf8 --log-level=error --outfile=dist/libs/@angular/common/http.prod.js dist/libs/@angular/common/http.js
mkdir dist/libs/@angular/forms
cp -v node_modules/@angular/forms/fesm2015/forms.js dist/libs/@angular/forms
npx esbuild --minify --legal-comments=external --charset=utf8 --log-level=error --outfile=dist/libs/@angular/forms/forms.prod.js dist/libs/@angular/forms/forms.js
mkdir dist/libs/@angular/animations
cp -v node_modules/@angular/animations/fesm2015/animations.js dist/libs/@angular/animations
npx esbuild --minify --legal-comments=external --charset=utf8 --log-level=error --outfile=dist/libs/@angular/animations/animations.prod.js dist/libs/@angular/animations/animations.js
cp -v node_modules/@angular/animations/fesm2015/browser.js dist/libs/@angular/animations/browser.js
npx esbuild --minify --legal-comments=external --charset=utf8 --log-level=error --outfile=dist/libs/@angular/animations/browser.prod.js dist/libs/@angular/animations/browser.js
mkdir dist/libs/@angular/platform-browser
cp -v node_modules/@angular/platform-browser/fesm2015/platform-browser.js dist/libs/@angular/platform-browser/platform-browser.js
npx esbuild --minify --legal-comments=external --charset=utf8 --log-level=error --outfile="dist/libs/@angular/platform-browser/platform-browser.prod.js" dist/libs/@angular/platform-browser/platform-browser.js
cp -v node_modules/@angular/platform-browser/fesm2015/animations.js dist/libs/@angular/platform-browser/animations.js
npx esbuild --minify --legal-comments=external --charset=utf8 --log-level=error --outfile="dist/libs/@angular/platform-browser/animations.prod.js" dist/libs/@angular/platform-browser/animations.js
mkdir dist/libs/@angular/platform-browser-dynamic
cp -v node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js dist/libs/@angular/platform-browser-dynamic
npx esbuild --minify --legal-comments=external --charset=utf8 --log-level=error --outfile="dist/libs/@angular/platform-browser-dynamic/platform-browser-dynamic.prod.js" dist/libs/@angular/platform-browser-dynamic/platform-browser-dynamic.js
mkdir dist/libs/@angular/router
cp -v node_modules/@angular/router/fesm2015/router.js dist/libs/@angular/router
npx esbuild --minify --legal-comments=external --charset=utf8 --log-level=error --outfile=dist/libs/@angular/router/router.prod.js dist/libs/@angular/router/router.js
mkdir dist/libs/@angular/localize
cp -v node_modules/@angular/localize/fesm2015/localize.js dist/libs/@angular/localize
npx esbuild --minify --legal-comments=external --charset=utf8 --log-level=error --outfile=dist/libs/@angular/localize/localize.prod.js dist/libs/@angular/localize/localize.js
cp -v node_modules/@angular/localize/fesm2015/init.js dist/libs/@angular/localize
npx esbuild --minify --legal-comments=external --charset=utf8 --log-level=error --outfile=dist/libs/@angular/localize/init.prod.js dist/libs/@angular/localize/init.js
npx rollup -c rollup/rollup.ng-locales.js
# angular/cdk
npx rollup -c rollup/rollup.ng-cdk.js
npx esbuild --minify --legal-comments=external --charset=utf8 --log-level=error --outfile=dist/libs/@angular/cdk/cdk.prod.js dist/libs/@angular/cdk/cdk.js
cp -v node_modules/@angular/cdk/*.css dist/libs/@angular/cdk/
# angular/material
npx rollup -c rollup/rollup.ng-mat.js
npx esbuild --minify --legal-comments=external --charset=utf8 --log-level=error --outfile=dist/libs/@angular/material/material.prod.js dist/libs/@angular/material/material.js
cp -vr node_modules/@angular/material/prebuilt-themes dist/libs/@angular/material/
