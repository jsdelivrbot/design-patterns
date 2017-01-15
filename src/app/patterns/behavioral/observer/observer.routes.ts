import { RouterModule } from '@angular/router'

import { ObserverComponent } from './observer.component'

const routes = [
  {path: 'observer', component: ObserverComponent},
];

export const Routing = RouterModule.forChild(routes)
