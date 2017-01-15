import { NgModule }          from '@angular/core';

import { BuilderComponent }  from './builder.component';
import { Routing }           from './builder.routes';
import { PatternViewModule } from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ BuilderComponent ],
})
export class BuilderModule {}
