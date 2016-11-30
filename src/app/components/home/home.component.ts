import { Component } from '@angular/core';

const template: string = require('./home.html');

@Component({
  selector: 'home',
  template,
})
export class HomeComponent {

  private behavioral = [
    {name: "Chain of responsibility", path: "chain-of-responsibility"},
    {name: "Command", path: "command"},
    {name: "Interpreter", path: "interpreter"},
    {name: "Iterator", path: "iterator"},
    {name: "Mediator", path: "mediator"},
    {name: "Memento", path: "memento"},
    {name: "Observer", path: "observer"},
    {name: "State", path: "state"},
    {name: "Strategy", path: "strategy"},
    {name: "Template method", path: "template-method"},
    {name: "Visitor", path: "visitor"},
  ]

  private creational = [
    {name: "Abstract factory", path: "abstract-factory"},
    {name: "Builder", path: "builder"},
    {name: "Factory method", path: "factory-method"},
    {name: "Prototype", path: "prototype"},
    {name: "Singleton", path: "singleton"},
  ]

  private structural = [
    {name: "Adapter", path: "adapter"},
    {name: "Bridge", path: "bridge"},
    {name: "Composite", path: "composite"},
    {name: "Decorator", path: "decorator"},
    {name: "Facade", path: "facade"},
    {name: "Flyweight", path: "flyweight"},
    {name: "Proxy", path: "proxy"},
  ]

}
