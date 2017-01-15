import { NgModule }           from '@angular/core';

import { CompositeComponent } from './composite.component';
import { Routing }            from './composite.routes';
import { PatternViewModule }  from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ CompositeComponent ],
})
export class CompositeModule {}
