import { RouterModule } from '@angular/router'

import { AdapterComponent } from './adapter.component'

const routes = [
  {path: 'adapter', component: AdapterComponent},
];

export const Routing = RouterModule.forChild(routes)
