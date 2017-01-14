import { Component, EventEmitter, Input, Output } from '@angular/core';

import { animations } from "./animations";

const styles: string[] = [require('./pattern-view.sass')];
const template: string = require('./pattern-view.html');

@Component({
  selector: 'pattern-view',
  template,
  styles,
  animations,
})
export class PatternViewComponent {
  @Input() data;
  @Output() runner = new EventEmitter<any>();

  private test() {
    this.runner.emit();
  }
}
