import { NgModule }        from '@angular/core';

import { BridgeComponent } from './bridge.component';
import { Routing }         from './bridge.routes';
import { PatternViewModule }  from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ BridgeComponent ],
})
export class BridgeModule {}
