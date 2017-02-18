"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var app_module_1 = require('./app/app.module');
require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');
require('./styles/style.scss');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
if (process.env.ENV === 'production') {
    core_1.enableProdMode();
}
//# sourceMappingURL=main.js.map