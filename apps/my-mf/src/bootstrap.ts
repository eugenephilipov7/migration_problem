// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
//
// if (environment.production) {
//   enableProdMode();
// }
//
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));
//

import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

declare const require: any;
const ngVersion = require('../../../package.json').dependencies[
  '@angular/core'
  ]; // perhaps just take the major version

(window as any).platform = (window as any).platform || {};
let platform = (window as any).platform[ngVersion];
if (!platform) {
  platform = platformBrowser();
  (window as any).platform[ngVersion] = platform;
}
platform.bootstrapModule(AppModule).catch((err: any) => console.error());
