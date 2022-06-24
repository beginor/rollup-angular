import { enableProdMode } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { platformBrowser } from '@angular/platform-browser';

import 'zone.js';
import '@angular/localize/init';

import zhHans from '@angular/common/locales/zh-Hans';
import zhHansEx from '@angular/common/locales/extra/zh-Hans';

import { AppModule } from './app.module';
// import { environment } from '../environments/environment';

import './app.scss';

declare function isProd(): boolean;

export class App {

    /** app title */
    public title = 'Hello, Rollup !';

    constructor(private container: HTMLElement) { }

    /**
     * run the app.
     */
    public run(): void {
        registerLocaleData(zhHans, 'zh-Hans', zhHansEx);
        if (isProd()) {
            enableProdMode();
        }
        platformBrowser().bootstrapModule(AppModule)
            .catch(ex => console.error(ex));
    }

}
