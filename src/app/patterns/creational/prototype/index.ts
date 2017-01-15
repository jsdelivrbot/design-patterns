import { NgModule }           from '@angular/core';

import { PrototypeComponent } from './prototype.component';
import { Routing }            from './prototype.routes';
import { PatternViewModule }  from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
   ],
  declarations: [ PrototypeComponent ],
})
export class PrototypeModule {}
