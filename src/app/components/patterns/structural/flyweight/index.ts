import { NgModule }           from '@angular/core';

import { FlyweightComponent } from './flyweight.component';
import { Routing }            from './flyweight.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ FlyweightComponent ],
})
export class FlyweightModule {}
