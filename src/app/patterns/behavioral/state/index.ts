import { NgModule }          from '@angular/core';

import { StateComponent }    from './state.component';
import { Routing }           from './state.routes';
import { PatternViewModule } from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ StateComponent ],
})
export class StateModule {}
