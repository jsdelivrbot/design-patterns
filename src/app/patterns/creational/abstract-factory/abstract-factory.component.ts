import { Component }        from '@angular/core';

import { data }             from "./assets/data";
import { UserFactory }      from "./assets/abstract-factory";
import { LogService }       from "../../../shared/log";

const template: string = require('./abstract-factory.html')

@Component({
  selector: 'abstract-factory',
  template,
})
export class AbstractFactoryComponent {
  private data = data;

  constructor(private log: LogService) {}

  private onExecute() {
    let user1 = UserFactory.create("hello from User1");
    let user2 = UserFactory.create("hello from User2");

    user1.say();
    user2.say();

    this.log.add([
      user1.say(),
      user2.say(),
    ])
  }
}
