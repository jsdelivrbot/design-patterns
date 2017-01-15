import { NgModule }          from '@angular/core';

import { IteratorComponent } from './iterator.component';
import { Routing }           from './iterator.routes';
import { PatternViewModule } from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ IteratorComponent ],
})
export class IteratorModule {}
