import { NgModule }                 from '@angular/core';

import { AbstractFactoryComponent } from './abstract-factory.component';
import { Routing }                  from './abstract-factory.routes';
import { PatternViewModule }        from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ AbstractFactoryComponent ],
})
export class AbstractFactoryModule {}
