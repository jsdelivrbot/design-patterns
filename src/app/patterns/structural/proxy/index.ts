import { NgModule }       from '@angular/core';

import { ProxyComponent } from './proxy.component';
import { Routing }        from './proxy.routes';
import { PatternViewModule }  from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ ProxyComponent ],
})
export class ProxyModule {}
