import { NgModule }               from '@angular/core';

import { FactoryMethodComponent } from './factory-method.component';
import { Routing }                from './factory-method.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ FactoryMethodComponent ],
})
export class FactoryMethodModule {}
