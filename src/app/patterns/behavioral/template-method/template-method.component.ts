import { Component }      from '@angular/core';

import { data }           from "./assets/data";
import { output } from "./assets/template-method";
import { LogService }     from "../../../shared/log";

const template: string = require('./template-method.html')

@Component({
  selector: 'template-method',
  template,
})
export class TemplateMethodComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add(output);
  }
}
