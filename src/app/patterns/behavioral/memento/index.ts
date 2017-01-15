import { NgModule }          from '@angular/core';

import { MementoComponent }  from './memento.component';
import { Routing }           from './memento.routes';
import { PatternViewModule } from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ MementoComponent ],
})
export class MementoModule {}
