import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';

import { SingletonComponent } from './singleton.component';
import { Routing }            from './singleton.routes';

@NgModule({
  imports: [
    CommonModule,
    Routing,
  ],
  declarations: [ SingletonComponent ],
})
export class SingletonModule {}
