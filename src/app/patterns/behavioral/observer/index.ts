import { NgModule }          from '@angular/core';

import { ObserverComponent } from './observer.component';
import { Routing }           from './observer.routes';
import { PatternViewModule } from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ ObserverComponent ],
})
export class ObserverModule {}
