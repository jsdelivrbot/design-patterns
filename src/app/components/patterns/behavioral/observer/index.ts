import { NgModule }          from '@angular/core';

import { ObserverComponent } from './observer.component';
import { Routing }           from './observer.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ ObserverComponent ],
})
export class ObserverModule {}
