import { RouterModule } from '@angular/router'

import { CompositeComponent } from './composite.component'

const routes = [
  {path: 'composite', component: CompositeComponent},
];

export const Routing = RouterModule.forChild(routes)
