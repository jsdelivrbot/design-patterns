import { NgModule }       from '@angular/core';

import { ProxyComponent } from './proxy.component';
import { Routing }        from './proxy.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ ProxyComponent ],
})
export class ProxyModule {}
