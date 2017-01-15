import { Component } from '@angular/core';

import { data }       from "./assets/data";
import { output }     from "./assets/proxy";
import { LogService } from "../../../shared/log";

const template: string = require('./proxy.html')

@Component({
  selector: 'proxy',
  template,
})
export class ProxyComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add(output);
  }
}
