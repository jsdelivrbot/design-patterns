import { NgModule }           from '@angular/core';

import { FlyweightComponent } from './flyweight.component';
import { Routing }            from './flyweight.routes';
import { PatternViewModule }  from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ FlyweightComponent ],
})
export class FlyweightModule {}
