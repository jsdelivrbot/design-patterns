import { NgModule }         from '@angular/core';

import { CommandComponent } from './command.component';
import { Routing }          from './command.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ CommandComponent ],
})
export class CommandModule {}
