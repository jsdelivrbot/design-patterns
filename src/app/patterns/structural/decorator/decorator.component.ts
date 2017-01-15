import { Component } from '@angular/core';

const template: string = require('./decorator.html')

@Component({
  selector: 'decorator',
  template,
})
export class DecoratorComponent {}
