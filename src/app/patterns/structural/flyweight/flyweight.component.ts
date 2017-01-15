import { Component } from '@angular/core';

import { data }       from "./assets/data";
import { Flyweight }  from "./assets/flyweight";
import { LogService } from "../../../shared/log";

const template: string = require('./flyweight.html')

@Component({
  selector: 'flyweight',
  template,
})
export class FlyweightComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add([ ]);
  }
}
