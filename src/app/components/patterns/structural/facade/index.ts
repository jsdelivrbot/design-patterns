import { NgModule }        from '@angular/core';

import { FacadeComponent } from './facade.component';
import { Routing }         from './facade.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ FacadeComponent ],
})
export class FacadeModule {}
