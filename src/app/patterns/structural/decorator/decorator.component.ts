import { Component } from '@angular/core';

import { data }       from "./assets/data";
import { output }     from "./assets/decorator";
import { LogService } from "../../../shared/log";

const template: string = require('./decorator.html')

@Component({
  selector: 'decorator',
  template,
})
export class DecoratorComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add(output);
  }
}
