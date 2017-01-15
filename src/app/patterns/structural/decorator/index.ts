import { NgModule }           from '@angular/core';

import { DecoratorComponent } from './decorator.component';
import { Routing }            from './decorator.routes';
import { PatternViewModule }  from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ DecoratorComponent ],
})
export class DecoratorModule {}
