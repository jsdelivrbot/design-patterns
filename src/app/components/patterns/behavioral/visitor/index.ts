import { NgModule }         from '@angular/core';

import { VisitorComponent } from './visitor.component';
import { Routing }          from './visitor.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ VisitorComponent ],
})
export class VisitorModule {}
