import { Component } from '@angular/core';

import { patternsList }  from "./patterns";

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
  private patterns = patternsList;
}
