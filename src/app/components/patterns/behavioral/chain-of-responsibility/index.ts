import { NgModule }                       from '@angular/core';

import { ChainOfResponsibilityComponent } from './chain-of-responsibility.component';
import { Routing }                        from './chain-of-responsibility.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ ChainOfResponsibilityComponent ],
})
export class ChainOfResponsibilityModule {}
