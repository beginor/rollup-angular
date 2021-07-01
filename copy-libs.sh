#!/bin/bash -e
rm -rf dist/libs && mkdir -p dist/libs
# tslib
mkdir dist/libs/tslib
cp -v node_modules/tslib/tslib.es6.js dist/libs/tslib/tslib.js
npx rollup -c rollup/rollup.tslib.js
# bootstrap-icons
cp -rv node_modules/bootstrap-icons/icons dist/libs/bootstrap-icons
# bootstrap
cp -rv node_modules/bootstrap/dist dist/libs/bootstrap
# @popperjs/core
npx rollup -c rollup/rollup.popperjs.js
## rxjs
rm -rf dist/libs/rxjs && mkdir dist/libs/rxjs
npx rollup -c rollup/rollup.rxjs.js
## zone.js
rm -rf dist/libs/zone.js
cp -r node_modules/zone.js/dist dist/libs/zone.js
## angular
rm -rf dist/libs/angular && mkdir dist/libs/angular
cp -r node_modules/@angular/core/fesm2015 dist/libs/angular/core
npx terser --comments false --module -o dist/libs/angular/core/core.prod.js dist/libs/angular/core/core.js
cp -r node_modules/@angular/compiler/fesm2015 dist/libs/angular/compiler
npx terser --comments false --module -o dist/libs/angular/compiler/compiler.prod.js dist/libs/angular/compiler/compiler.js
cp -r node_modules/@angular/common/fesm2015 dist/libs/angular/common
npx terser --comments false --module -o dist/libs/angular/common/common.prod.js dist/libs/angular/common/common.js
cp -r node_modules/@angular/forms/fesm2015 dist/libs/angular/forms
npx terser --comments false --module -o dist/libs/angular/forms/forms.prod.js dist/libs/angular/forms/forms.js
cp -r node_modules/@angular/animations/fesm2015 dist/libs/angular/animations
npx terser --comments false --module -o dist/libs/angular/animations/animations.prod.js dist/libs/angular/animations/animations.js
cp -r node_modules/@angular/platform-browser/fesm2015 dist/libs/angular/platform-browser
npx terser --comments false --module -o "dist/libs/angular/platform-browser/platform-browser.prod.js" dist/libs/angular/platform-browser/platform-browser.js
cp -r node_modules/@angular/platform-browser-dynamic/fesm2015 dist/libs/angular/platform-browser-dynamic
npx terser --comments false --module -o "dist/libs/angular/platform-browser-dynamic/platform-browser-dynamic.prod.js" dist/libs/angular/platform-browser-dynamic/platform-browser-dynamic.js
cp -r node_modules/@angular/router/fesm2015 dist/libs/angular/router
npx terser --comments false --module -o dist/libs/angular/router/router.prod.js dist/libs/angular/router/router.js
# cp -r node_modules/@angular/localize/fesm2015 dist/libs/angular/localize
# npx terser --comments false --module -o dist/libs/angular/localize/localize.prod.js dist/libs/angular/localize/localize.js

