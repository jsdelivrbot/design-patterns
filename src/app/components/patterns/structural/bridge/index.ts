import { NgModule }        from '@angular/core';

import { BridgeComponent } from './bridge.component';
import { Routing }         from './bridge.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ BridgeComponent ],
})
export class BridgeModule {}
