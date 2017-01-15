import { Component } from '@angular/core';

import { data }       from "./assets/data";
import { output }     from "./assets/facade";
import { LogService } from "../../../shared/log";

const template: string = require('./facade.html')

@Component({
  selector: 'facade',
  template,
})
export class FacadeComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add(output);
  }
}
