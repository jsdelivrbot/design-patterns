import { Component, ViewEncapsulation } from '@angular/core';

const styles: string[] =[require('./app.component.sass')];

@Component({
  selector: 'app',
  template: `<router-outlet></router-outlet>`,
  encapsulation: ViewEncapsulation.None,
  styles,
})
export class AppComponent {}
