import { Component, Input } from '@angular/core';

import { animations }       from "./animations";

const styles: string[] = [require('./sidemenu.sass')];
const template: string = require('./sidemenu.html');

@Component({
  selector: 'sidemenu',
  template,
  styles,
  animations,
})
export class SidemenuComponent {
  @Input() patterns

  private toggleList(type) {
    type.state = (type.state === 'active' ? 'inactive' : 'active');
  }
}
