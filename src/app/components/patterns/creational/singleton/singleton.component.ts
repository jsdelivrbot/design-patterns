import { Component } from '@angular/core';

import { data }      from "./data";

const template: string = require('./singleton.html');

@Component({
  selector: 'singleton',
  template,
})
export class SingletonComponent {
  private data = data;

  private onExecute() {
    console.log("ptrn executed")
  }
}
