import { Component }  from '@angular/core';

import { data }       from "./assets/data";
import { Strategy }   from "./assets/strategy";
import { LogService } from "../../../shared/log";

const template: string = require('./strategy.html')

@Component({
  selector: 'strategy',
  template,
})
export class StrategyComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add([ ]);
  }
}
