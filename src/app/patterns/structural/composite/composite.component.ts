import { Component } from '@angular/core';

import { data }       from "./assets/data";
import { Composite }  from "./assets/composite";
import { LogService } from "../../../shared/log";

const template: string = require('./composite.html')

@Component({
  selector: 'composite',
  template,
})
export class CompositeComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add([ ]);
  }
}
