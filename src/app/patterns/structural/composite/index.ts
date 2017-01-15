import { NgModule }           from '@angular/core';

import { CompositeComponent } from './composite.component';
import { Routing }            from './composite.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ CompositeComponent ],
})
export class CompositeModule {}
