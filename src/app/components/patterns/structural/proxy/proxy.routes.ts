import { RouterModule } from '@angular/router'

import { ProxyComponent } from './proxy.component'

const routes = [
  {path: 'proxy', component: ProxyComponent},
];

export const Routing = RouterModule.forChild(routes)
