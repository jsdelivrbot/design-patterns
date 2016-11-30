import { NgModule }                    from '@angular/core';

import { ChainOfResponsibilityModule } from './chain-of-responsibility';
import { CommandModule }               from './command';
import { InterpreterModule }           from './interpreter';
import { IteratorModule }              from './iterator';
import { MediatorModule }              from './mediator';
import { MementoModule }               from './memento';
import { ObserverModule }              from './observer';
import { StateModule }                 from './state';
import { StrategyModule }              from './strategy';
import { TemplateMethodModule }        from './template-method';
import { VisitorModule }               from './visitor';

@NgModule({
  imports: [
    ChainOfResponsibilityModule,
    CommandModule,
    InterpreterModule,
    IteratorModule,
    MediatorModule,
    MementoModule,
    ObserverModule,
    StateModule,
    StrategyModule,
    TemplateMethodModule,
    VisitorModule,
  ],
})
export class BehavioralModule {}
