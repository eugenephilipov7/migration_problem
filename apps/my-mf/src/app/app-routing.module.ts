import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CrudWrapperComponent } from './request-crud-wrapper/crud-wrapper.component';

import {
  startsWith,
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: CrudWrapperComponent,
      }
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
