import { Component }  from '@angular/core';

import { data }       from "./assets/data";
import { Iterator }   from "./assets/iterator";
import { LogService } from "../../../shared/log";

const template: string = require('./iterator.html')

@Component({
  selector: 'iterator',
  template,
})
export class IteratorComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add([ ]);
  }
}
