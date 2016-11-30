import { RouterModule } from '@angular/router'

import { BridgeComponent } from './bridge.component'

const routes = [
  {path: 'bridge', component: BridgeComponent},
];

export const Routing = RouterModule.forChild(routes)
