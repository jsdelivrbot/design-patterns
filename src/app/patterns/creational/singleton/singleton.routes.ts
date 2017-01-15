import { RouterModule }       from '@angular/router'

import { SingletonComponent } from './singleton.component'

const routes = [
  {path: 'singleton', component: SingletonComponent},
]

export const Routing = RouterModule.forChild(routes)
