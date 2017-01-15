import { NgModule }                from '@angular/core';

import { TemplateMethodComponent } from './template-method.component';
import { Routing }                 from './template-method.routes';
import { PatternViewModule }       from '../../../UI';

@NgModule({
  imports: [
    Routing,
    PatternViewModule,
  ],
  declarations: [ TemplateMethodComponent ],
})
export class TemplateMethodModule {}
