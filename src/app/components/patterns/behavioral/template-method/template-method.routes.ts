import { RouterModule } from '@angular/router'

import { TemplateMethodComponent } from './template-method.component'

const routes = [
  {path: 'template-method', component: TemplateMethodComponent},
];

export const Routing = RouterModule.forChild(routes)
