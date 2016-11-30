import { RouterModule } from '@angular/router'

import { FlyweightComponent } from './flyweight.component'

const routes = [
  {path: 'flyweight', component: FlyweightComponent},
];

export const Routing = RouterModule.forChild(routes)
