import {
    enableProdMode, ɵNgModuleFactory as NgModuleFactory
} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

import 'zone.js';
import '@angular/localize/init';

import zhHans from '@angular/common/locales/zh-Hans';
import zhHansEx from '@angular/common/locales/extra/zh-Hans';

declare function isProd(): boolean;

registerLocaleData(zhHans, 'zh-Hans', zhHansEx);

if (isProd()) {
  enableProdMode();
}

platformBrowser().bootstrapModuleFactory(new NgModuleFactory(AppModule))
  .catch(err => console.error(err));
