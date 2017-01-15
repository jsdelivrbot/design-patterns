import { Component }  from '@angular/core';

import { data }       from "./assets/data";
import { Memento }    from "./assets/memento";
import { LogService } from "../../../shared/log";

const template: string = require('./memento.html')

@Component({
  selector: 'memento',
  template,
})
export class MementoComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add([ ]);
  }
}
