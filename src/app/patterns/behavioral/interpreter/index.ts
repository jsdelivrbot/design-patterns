import { NgModule }             from '@angular/core';

import { InterpreterComponent } from './interpreter.component';
import { Routing }              from './interpreter.routes';
import { PatternViewModule }    from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ InterpreterComponent ],
})
export class InterpreterModule {}
