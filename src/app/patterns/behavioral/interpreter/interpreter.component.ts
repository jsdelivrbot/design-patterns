import { Component }  from '@angular/core';

import { data }       from "./assets/data";
import { output }     from "./assets/interpreter";
import { LogService } from "../../../shared/log";

const template: string = require('./interpreter.html')

@Component({
  selector: 'interpreter',
  template,
})
export class InterpreterComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add(output);
  }
}
