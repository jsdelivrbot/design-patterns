import { NgModule }          from '@angular/core';

import { IteratorComponent } from './iterator.component';
import { Routing }           from './iterator.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ IteratorComponent ],
})
export class IteratorModule {}
