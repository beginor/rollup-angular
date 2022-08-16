import '@angular/compiler';
import 'zone.js';
import '@angular/localize/init';

import { enableProdMode } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { platformBrowser } from '@angular/platform-browser';
import zhHans from '@angular/common/locales/zh-Hans';
import zhHansEx from '@angular/common/locales/extra/zh-Hans';

import { AppModule } from './app/app.module';

import '../src/main.css';

declare function isProd(): boolean;

registerLocaleData(zhHans, 'zh-Hans', zhHansEx);

if (isProd()) {
    enableProdMode();
}

platformBrowser().bootstrapModule(AppModule)
    .then(moduleRef => {
        moduleRef.instance.appRoot = document.getElementById('app')!
    })
    .catch(ex => console.error(ex));
