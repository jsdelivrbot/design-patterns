import { Component } from '@angular/core';

import { data }       from "./assets/data";
import { output }     from "./assets/bridge";
import { LogService } from "../../../shared/log";

const template: string = require('./bridge.html')

@Component({
  selector: 'bridge',
  template,
})
export class BridgeComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add(output);
  }
}
