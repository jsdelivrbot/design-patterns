import { NgModule }         from '@angular/core';

import { BehavioralModule } from './behavioral';
import { CreationalModule } from './creational';
import { StructuralModule } from './structural';
import { LogService }       from '../shared/log';

export * from './patterns-list';

@NgModule({
  imports: [
    BehavioralModule,
    CreationalModule,
    StructuralModule,
  ],
  providers: [ LogService ],
})
export class PatternsModule {}
