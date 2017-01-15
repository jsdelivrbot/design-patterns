import { Component }  from '@angular/core';

import { data }       from "./assets/data";
import { State }      from "./assets/state";
import { LogService } from "../../../shared/log";

const template: string = require('./state.html')

@Component({
  selector: 'state',
  template,
})
export class StateComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add([ ]);
  }
}
