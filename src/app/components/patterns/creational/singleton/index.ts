import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';

import { SingletonComponent } from './singleton.component';
import { Routing }            from './singleton.routes';

import { PatternViewModule }  from '../../../../UI';

@NgModule({
  imports: [
    CommonModule,
    Routing,
    PatternViewModule,
  ],
  declarations: [ SingletonComponent ],
})
export class SingletonModule {}
