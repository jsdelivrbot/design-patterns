import { Component } from '@angular/core';

import { data }       from "./assets/data";
import { output }     from "./assets/adapter";
import { LogService } from "../../../shared/log";

const template: string = require('./adapter.html')

@Component({
  selector: 'adapter',
  template,
})
export class AdapterComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add(output);
  }
}
