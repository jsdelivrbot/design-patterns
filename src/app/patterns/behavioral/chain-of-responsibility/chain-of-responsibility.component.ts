import { Component }             from '@angular/core';

import { data }                  from "./assets/data";
import { ChainOfResponsibility } from "./assets/chain-of-responsibility";
import { LogService }            from "../../../shared/log";

const template: string = require('./chain-of-responsibility.html')

@Component({
  selector: 'chain-of-responsibility',
  template,
})
export class ChainOfResponsibilityComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add([ ]);
  }
}
