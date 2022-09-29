import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
import {
  CrudWrapperComponent,
} from './request-crud-wrapper/crud-wrapper.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveComponentModule } from '@ngrx/component';


import { APP_BASE_HREF, PlatformLocation } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CrudWrapperComponent,
  ],
  imports: [
    BrowserModule,
    ModuleFederationToolsModule,
    AppRoutingModule,
    ReactiveComponentModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: (platformLocation: PlatformLocation) =>
        platformLocation.getBaseHrefFromDOM(),
      deps: [PlatformLocation],
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
