import { NgModule }          from '@angular/core';

import { StrategyComponent } from './strategy.component';
import { Routing }           from './strategy.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ StrategyComponent ],
})
export class StrategyModule {}
