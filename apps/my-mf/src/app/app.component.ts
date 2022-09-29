import { Component } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
@Component({
  selector: 'mymf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-mf';
}
