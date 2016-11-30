import { RouterModule } from '@angular/router'

import { MediatorComponent } from './mediator.component'

const routes = [
  {path: 'mediator', component: MediatorComponent},
];

export const Routing = RouterModule.forChild(routes)
