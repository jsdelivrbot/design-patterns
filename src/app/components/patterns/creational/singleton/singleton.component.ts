import { Component }  from '@angular/core';

import { data }       from "./assets/data";
import { Singleton }  from "./assets/singleton";
import { LogService } from "../../../../shared/log";

const template: string = require('./singleton.html');

@Component({
  selector: 'singleton',
  template,
})
export class SingletonComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    let singleton1 = new Singleton(1);
    let singleton2 = new Singleton(2);

    this.log.add([
      singleton1.data,
      singleton2.data,
      singleton1 === singleton2,
      singleton1 instanceof Singleton,
      singleton2 instanceof Singleton,
    ]);
  }
}
