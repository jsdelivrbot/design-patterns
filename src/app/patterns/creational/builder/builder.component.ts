import { Component }  from '@angular/core';

import { data }       from "./assets/data";
import { output }     from "./assets/builder";
import { LogService } from "../../../shared/log";

const template: string = require('./builder.html')

@Component({
  selector: 'builder',
  template,
})
export class BuilderComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add(output);
  }
}
