import { Component }        from '@angular/core';

import { data }             from "./assets/data";
import { AbstractFactory }  from "./assets/abstract-factory";
import { LogService }       from "../../../shared/log";

const template: string = require('./abstract-factory.html')

@Component({
  selector: 'abstract-factory',
  template,
})
export class AbstractFactoryComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add([ ]);
  }
}
