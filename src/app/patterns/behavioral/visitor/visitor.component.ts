import { Component }  from '@angular/core';

import { data }       from "./assets/data";
import { Visitor }    from "./assets/visitor";
import { LogService } from "../../../shared/log";

const template: string = require('./visitor.html');

@Component({
  selector: 'visitor',
  template,
})
export class VisitorComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add([ ]);
  }
}
