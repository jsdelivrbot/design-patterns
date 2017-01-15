import { NgModule }        from '@angular/core';

import { FacadeComponent } from './facade.component';
import { Routing }         from './facade.routes';
import { PatternViewModule }  from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ FacadeComponent ],
})
export class FacadeModule {}
