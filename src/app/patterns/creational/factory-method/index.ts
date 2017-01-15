import { NgModule }               from '@angular/core';

import { FactoryMethodComponent } from './factory-method.component';
import { Routing }                from './factory-method.routes';
import { PatternViewModule }      from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ FactoryMethodComponent ],
})
export class FactoryMethodModule {}
