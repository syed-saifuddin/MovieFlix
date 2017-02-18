import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './styles/style.scss';

platformBrowserDynamic().bootstrapModule(AppModule);

if (process.env.ENV === 'production') {
    enableProdMode();
}