import { Component } from '@angular/core';

import { data }       from "./assets/data";
import { output }     from "./assets/prototype";
import { LogService } from "../../../shared/log";

const template: string = require('./prototype.html')

@Component({
  selector: 'prototype',
  template,
})
export class PrototypeComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add(output);
  }
}
