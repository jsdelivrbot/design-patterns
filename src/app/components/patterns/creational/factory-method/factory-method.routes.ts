import { RouterModule }           from '@angular/router'

import { FactoryMethodComponent } from './factory-method.component'

const routes = [
  {path: 'factory-method', component: FactoryMethodComponent},
]

export const Routing = RouterModule.forChild(routes);
