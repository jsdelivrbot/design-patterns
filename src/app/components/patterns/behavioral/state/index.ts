import { NgModule }       from '@angular/core';

import { StateComponent } from './state.component';
import { Routing }        from './state.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ StateComponent ],
})
export class StateModule {}
