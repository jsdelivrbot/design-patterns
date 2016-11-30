import { RouterModule }     from '@angular/router'

import { BuilderComponent } from './builder.component'

const routes = [
  {path: 'builder', component: BuilderComponent},
]

export const Routing = RouterModule.forChild(routes)
