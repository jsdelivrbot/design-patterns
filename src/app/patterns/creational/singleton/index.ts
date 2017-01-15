import { NgModule }           from '@angular/core';

import { SingletonComponent } from './singleton.component';
import { Routing }            from './singleton.routes';
import { PatternViewModule }  from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ SingletonComponent ],
})
export class SingletonModule {}
