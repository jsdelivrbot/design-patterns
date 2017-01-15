import { RouterModule } from '@angular/router'

import { StateComponent } from './state.component'

const routes = [
  {path: 'state', component: StateComponent},
];

export const Routing = RouterModule.forChild(routes)
