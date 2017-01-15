import { NgModule }           from '@angular/core';

import { DecoratorComponent } from './decorator.component';
import { Routing }            from './decorator.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ DecoratorComponent ],
})
export class DecoratorModule {}
