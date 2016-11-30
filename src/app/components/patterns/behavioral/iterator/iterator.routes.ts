import { RouterModule } from '@angular/router'

import { IteratorComponent } from './iterator.component'

const routes = [
  {path: 'iterator', component: IteratorComponent},
];

export const Routing = RouterModule.forChild(routes)
