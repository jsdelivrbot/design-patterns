import { Component } from '@angular/core';

import { PATTERNS }  from "./patterns-list";

const styles: string[] = [require('./app.sass')];

@Component({
  selector: 'app',
  template: `
    <sidemenu [patterns]="patterns"></sidemenu>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles,
})
export class AppComponent {
  private patterns = PATTERNS;
}
