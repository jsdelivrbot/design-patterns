import { NgModule }                from '@angular/core';

import { TemplateMethodComponent } from './template-method.component';
import { Routing }                 from './template-method.routes';

@NgModule({
  imports:      [ Routing ],
  declarations: [ TemplateMethodComponent ],
})
export class TemplateMethodModule {}
