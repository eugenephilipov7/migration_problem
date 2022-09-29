import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  WebComponentWrapper,
} from '@angular-architects/module-federation-tools/lib/web-components/web-component-wrapper';
import { map } from 'rxjs/operators';

type Props = WebComponentWrapper['props'];
type Events = WebComponentWrapper['events'];

interface CrudProps extends Props {
  wordingRequestId: string | null;
  offerId: string;
  step: string;
}

@Component({
  selector: 'mymf-request-crud-wrapper',
  templateUrl: './crud-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudWrapperComponent {
  public options: WebComponentWrapperOptions = {
    type: 'module',
    remoteEntry: `${process.env['DH_MF_WC']}/remoteEntry.js`,
    exposedModule: 'wordingRequestCrud',
    elementName: 'wc-request-crud',
  };

  public props$: Observable<any>;

  public events: Events = {
  } as unknown as Events;

  constructor(public activatedRoute: ActivatedRoute, public router: Router) {}
}
