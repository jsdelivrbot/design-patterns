import { NgModule }          from '@angular/core';

import { StrategyComponent } from './strategy.component';
import { Routing }           from './strategy.routes';
import { PatternViewModule } from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ StrategyComponent ],
})
export class StrategyModule {}
