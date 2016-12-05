import { NgModule }          from '@angular/core';
import { RouterModule }      from '@angular/router';
import { CommonModule }      from '@angular/common';

import { SidemenuComponent } from './sidemenu.component';

@NgModule({
  imports:      [ CommonModule, RouterModule ],
  declarations: [ SidemenuComponent ],
  exports:      [ SidemenuComponent ],
})
export class SidemenuModule {}
