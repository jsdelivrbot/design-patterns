import { NgModule }                       from '@angular/core';

import { ChainOfResponsibilityComponent } from './chain-of-responsibility.component';
import { Routing }                        from './chain-of-responsibility.routes';
import { PatternViewModule }              from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ ChainOfResponsibilityComponent ],
})
export class ChainOfResponsibilityModule {}
