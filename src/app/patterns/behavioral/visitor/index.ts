import { NgModule }          from '@angular/core';

import { VisitorComponent }  from './visitor.component';
import { Routing }           from './visitor.routes';
import { PatternViewModule } from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ VisitorComponent ],
})
export class VisitorModule {}
