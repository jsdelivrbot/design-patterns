import { RouterModule } from '@angular/router'

import { FacadeComponent } from './facade.component'

const routes = [
  {path: 'facade', component: FacadeComponent},
];

export const Routing = RouterModule.forChild(routes)
