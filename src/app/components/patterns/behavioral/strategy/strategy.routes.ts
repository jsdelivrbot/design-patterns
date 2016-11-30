import { RouterModule } from '@angular/router'

import { StrategyComponent } from './strategy.component'

const routes = [
  {path: 'strategy', component: StrategyComponent},
];

export const Routing = RouterModule.forChild(routes)
