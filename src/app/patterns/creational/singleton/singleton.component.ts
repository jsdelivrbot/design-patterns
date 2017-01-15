import { Component }  from '@angular/core';

import { data }       from "./assets/data";
import { output }     from "./assets/singleton";
import { LogService } from "../../../shared/log";

const template: string = require('./singleton.html');

@Component({
  selector: 'singleton',
  template,
})
export class SingletonComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add(output);
  }
}
