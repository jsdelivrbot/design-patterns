import { RouterModule } from '@angular/router'

import { VisitorComponent } from './visitor.component'

const routes = [
  {path: 'visitor', component: VisitorComponent},
];

export const Routing = RouterModule.forChild(routes)
