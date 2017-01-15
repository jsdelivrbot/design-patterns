import { RouterModule } from '@angular/router'

import { MementoComponent } from './memento.component'

const routes = [
  {path: 'memento', component: MementoComponent},
];

export const Routing = RouterModule.forChild(routes)
