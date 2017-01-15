import { NgModule }             from '@angular/core';

import { InterpreterComponent } from './interpreter.component';
import { Routing }              from './interpreter.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ InterpreterComponent ],
})
export class InterpreterModule {}
