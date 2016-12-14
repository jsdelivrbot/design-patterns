import { Component, Input } from '@angular/core';

import { animations }       from "./animations";

const styles: string[] = [require('./pattern-view.sass')];
const template: string = require('./pattern-view.html');

@Component({
  selector: 'pattern-view',
  template,
  styles,
  animations,
})
export class PatternViewComponent {}
