import { NgModule }             from '@angular/core';

import { InterpreterComponent } from './interpreter.component';
import { Routing }              from './Interpreter.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ InterpreterComponent ],
})
export class InterpreterModule {}
