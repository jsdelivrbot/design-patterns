import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { HomeModule }     from './home';
import { PatternsModule } from './patterns';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    PatternsModule,
  ],
})
export class ComponentsModule {}
