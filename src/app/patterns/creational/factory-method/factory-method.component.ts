import { Component }      from '@angular/core';

import { data }           from "./assets/data";
import { FactoryMethod }  from "./assets/factory-method";
import { LogService }     from "../../../shared/log";

const template: string = require('./factory-method.html')

@Component({
  selector: 'factory-method',
  template,
})
export class FactoryMethodComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    this.log.add([ ]);
  }
}
