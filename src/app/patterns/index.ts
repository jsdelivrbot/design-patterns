import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';

import { BehavioralModule } from './behavioral';
import { CreationalModule } from './creational';
import { StructuralModule } from './structural';
import { LogService }       from '../shared/log';

export * from './patterns-list';

@NgModule({
  imports: [
    CommonModule,
    BehavioralModule,
    CreationalModule,
    StructuralModule,
  ],
  providers: [ LogService ],
})
export class PatternsModule {}
