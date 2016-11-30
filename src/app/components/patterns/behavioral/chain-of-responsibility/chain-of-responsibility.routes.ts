import { RouterModule } from '@angular/router'

import { ChainOfResponsibilityComponent } from './chain-of-responsibility.component'

const routes = [
  {path: 'chain-of-responsibility', component: ChainOfResponsibilityComponent},
];

export const Routing = RouterModule.forChild(routes)
