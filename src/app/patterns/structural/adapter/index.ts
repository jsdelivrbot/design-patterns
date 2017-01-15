import { NgModule }         from '@angular/core';

import { AdapterComponent } from './adapter.component';
import { Routing }          from './adapter.routes';
import { PatternViewModule }  from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ AdapterComponent ],
})
export class AdapterModule {}
