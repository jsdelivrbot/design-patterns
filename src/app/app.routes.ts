import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }        from './components/home/home.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent }
];

export const ROUTER_MODULE = RouterModule.forRoot(ROUTES, { useHash: true });
