import { Routes, RouterModule } from '@angular/router';

import { SingletoneComponent }  from './components/creational/singleton';

export const ROUTES: Routes = [
  { path: '', component: SingletoneComponent }
];
