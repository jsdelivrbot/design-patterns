import { NgModule }              from '@angular/core';

import { AbstractFactoryModule } from './abstract-factory';
import { BuilderModule }         from './builder';
import { FactoryMethodModule }   from './factory-method';
import { PrototypeModule }       from './prototype';
import { SingletonModule }       from './singleton';

@NgModule({
  imports: [
    AbstractFactoryModule,
    BuilderModule,
    FactoryMethodModule,
    PrototypeModule,
    SingletonModule,
  ],
})
export class CreationalModule {}
