import { NgModule }          from '@angular/core';

import { MediatorComponent } from './mediator.component';
import { Routing }           from './mediator.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ MediatorComponent ],
})
export class MediatorModule {}
