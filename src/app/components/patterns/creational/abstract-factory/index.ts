import { NgModule }                 from '@angular/core';

import { AbstractFactoryComponent } from './abstract-factory.component';
import { Routing }                  from './abstract-factory.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ AbstractFactoryComponent ],
})
export class AbstractFactoryModule {}
