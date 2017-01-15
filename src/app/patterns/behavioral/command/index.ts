import { NgModule }          from '@angular/core';

import { CommandComponent }  from './command.component';
import { Routing }           from './command.routes';
import { PatternViewModule } from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ CommandComponent ],
})
export class CommandModule {}
