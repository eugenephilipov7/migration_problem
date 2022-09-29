import { platformBrowser } from '@angular/platform-browser';
import { CrudModule } from './request-crud.module';

declare const require: any;
const ngVersion = require('../../../../../package.json').dependencies[
  '@angular/core'
  ]; // perhaps just take the major version

(window as any).platform = (window as any).platform || {};
let platform = (window as any).platform[ngVersion];
if (!platform) {
  platform = platformBrowser();
  (window as any).platform[ngVersion] = platform;
}

platform
  .bootstrapModule(CrudModule)
  .catch((err: any) => console.error(err));
