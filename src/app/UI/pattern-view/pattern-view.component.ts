import { Component, EventEmitter, Input, Output } from '@angular/core';

import { animations } from "./animations";
import { LogService } from "../../shared/log";

const styles: string[] = [require('./pattern-view.sass')];
const template: string = require('./pattern-view.html');

@Component({
  selector: 'pattern-view',
  template,
  styles,
  animations,
})
export class PatternViewComponent implements AfterViewInit {
  @Input() data;
  @Output() runner = new EventEmitter<any>();

  private results;

  constructor(private log: LogService) {
    log.streams$
      .subscribe(results => this.results = results);
  }

  ngAfterViewInit() {
    PR.prettyPrint();
  }

  private test() {
    this.runner.emit();
  }
}
