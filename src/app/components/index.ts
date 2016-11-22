import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';

import { SingletoneComponent } from './creational/singleton/singletone.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ SingletoneComponent ],
})
export class ComponentsModule {}
