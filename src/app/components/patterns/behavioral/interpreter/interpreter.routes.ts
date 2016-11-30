import { RouterModule } from '@angular/router'

import { InterpreterComponent } from './interpreter.component'

const routes = [
  {path: 'interpreter', component: InterpreterComponent},
];

export const Routing = RouterModule.forChild(routes)
