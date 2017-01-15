import { NgModule }          from '@angular/core';

import { MediatorComponent } from './mediator.component';
import { Routing }           from './mediator.routes';
import { PatternViewModule } from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ MediatorComponent ],
})
export class MediatorModule {}
