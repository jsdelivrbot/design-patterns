import { Component }  from '@angular/core';

import { data }       from "./assets/data";
import { output }     from "./assets/observer";
import { LogService } from "../../../shared/log";

const template: string = require('./observer.html')

@Component({
  selector: 'observer',
  template,
})
export class ObserverComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add(output);
  }
}
