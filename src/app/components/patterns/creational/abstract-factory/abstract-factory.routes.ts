import { RouterModule } from '@angular/router'

import { AbstractFactoryComponent } from './abstract-factory.component'

const routes = [
  {path: 'abstract-factory', component: AbstractFactoryComponent},
];

export const Routing = RouterModule.forChild(routes)
