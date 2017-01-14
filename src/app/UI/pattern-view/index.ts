import { NgModule, }            from '@angular/core';
import { CommonModule }         from '@angular/common';

import { PatternViewComponent } from './pattern-view.component';
import { LogService }           from "../../shared/log";

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ PatternViewComponent ],
  exports:      [ PatternViewComponent ],
  providers:    [ LogService ],
})
export class PatternViewModule {}
