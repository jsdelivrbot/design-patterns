import { NgModule, }            from '@angular/core';
import { CommonModule }         from '@angular/common';

import { PatternViewComponent } from './pattern-view.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ PatternViewComponent ],
  exports:      [ PatternViewComponent ]
})
export class PatternViewModule {}
