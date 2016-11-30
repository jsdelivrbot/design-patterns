import { NgModule }         from '@angular/core';

import { BuilderComponent } from './builder.component';
import { Routing }          from './builder.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ BuilderComponent ],
})
export class BuilderModule {}
