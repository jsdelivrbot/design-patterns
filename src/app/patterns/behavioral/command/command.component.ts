import { Component }  from '@angular/core';

import { data }       from "./assets/data";
import { output }     from "./assets/command";
import { LogService } from "../../../shared/log";

const template: string = require('./command.html')

@Component({
  selector: 'command',
  template,
})
export class CommandComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add(output);
  }
}
