import { NgModule }         from '@angular/core';

import { BehavioralModule } from './behavioral';
import { CreationalModule } from './creational';
import { StructuralModule } from './structural';

@NgModule({
  imports: [
    BehavioralModule,
    CreationalModule,
    StructuralModule,
  ],
})
export class PatternsModule {}
