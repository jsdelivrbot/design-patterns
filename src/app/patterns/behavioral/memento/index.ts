import { NgModule }         from '@angular/core';

import { MementoComponent } from './memento.component';
import { Routing }          from './memento.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ MementoComponent ],
})
export class MementoModule {}
