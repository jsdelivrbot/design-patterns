import { RouterModule }       from '@angular/router'

import { PrototypeComponent } from './prototype.component'

const routes = [
  {path: 'prototype', component: PrototypeComponent},
]

export const Routing = RouterModule.forChild(routes)
