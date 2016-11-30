import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { HomeComponent } from './home.component';
import { Routing }       from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [ HomeComponent ],
})
export class HomeModule {}
