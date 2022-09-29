/*
 * This RemoteEntryModule is imported here to allow TS to find the Module during
 * compilation, allowing it to be included in the built bundle. This is required
 * for the Module Federation Plugin to expose the Module correctly.
 * */
import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrudComponent } from './ui/crud.component';
import { createCustomElement } from '@angular/elements';
import { DhWordingRequestCommonModule } from '../common.module';

@NgModule({
  declarations: [
    CrudComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DhWordingRequestCommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [

  ],
  exports: [

  ],
})
export class CrudModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(): void {
    const wrsWebComponent = createCustomElement(CrudComponent, {
      injector: this.injector,
    });
    customElements.define('wc-request-crud', wrsWebComponent);
  }
}
