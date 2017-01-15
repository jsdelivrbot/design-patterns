import { Component }  from '@angular/core';

import { data }       from "./assets/data";
import { output }     from "./assets/mediator";
import { LogService } from "../../../shared/log";

const template: string = require('./mediator.html')

@Component({
  selector: 'mediator',
  template,
})
export class MediatorComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add(output);
  }
}
