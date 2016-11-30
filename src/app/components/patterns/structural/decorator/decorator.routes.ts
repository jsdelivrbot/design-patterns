import { RouterModule } from '@angular/router'

import { DecoratorComponent } from './decorator.component'

const routes = [
  {path: 'decorator', component: DecoratorComponent},
];

export const Routing = RouterModule.forChild(routes)
