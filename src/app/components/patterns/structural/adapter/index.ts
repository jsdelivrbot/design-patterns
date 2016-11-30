import { NgModule }         from '@angular/core';

import { AdapterComponent } from './adapter.component';
import { Routing }          from './adapter.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ AdapterComponent ],
})
export class AdapterModule {}
