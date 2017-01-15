import { RouterModule } from '@angular/router'

import { CommandComponent } from './command.component'

const routes = [
  {path: 'command', component: CommandComponent},
];

export const Routing = RouterModule.forChild(routes)
