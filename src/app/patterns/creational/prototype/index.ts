import { NgModule }           from '@angular/core';

import { PrototypeComponent } from './prototype.component';
import { Routing }            from './prototype.routes';

@NgModule({
  imports: [ Routing ],
  declarations: [ PrototypeComponent ],
})
export class PrototypeModule {}
