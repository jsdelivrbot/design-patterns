class Flyweight {
  constructor(private model) {
    // ...
  }
}

let FlyWeightFactory = (() => {
  let flyweights = {};

  return {
    get (model){
      if (!flyweights[model]) {
        flyweights[model] = new Flyweight(model);
      }

      return flyweights[model];
    },
    getCount (){
      var count = 0;
      for (var f in flyweights) count++;
      return count;
    }
  }
})();

class ComputerCollection {
  private computers = {}
  private count = 0

  add (model, tag){
    this.computers[tag] = new Computer(model, tag);
    this.count++;
  }
  get (tag){
    return this.computers[tag];
  }
  getCount (){
    return this.count;
  }
}

class Computer {
  private flyweight;
  private tag;
  constructor (model, tag){
    this.flyweight = FlyWeightFactory.get(model);
    this.tag = tag;
  }
}

var computers = new ComputerCollection();
computers.add("Dell", "Y755P");
computers.add("Dell", "X997T");
computers.add("HP", "CNU883701");
computers.add("HP", "TXU003283");

export const output = [
  `Computers: ${computers.getCount()}`,
  `Flyweights: ${FlyWeightFactory.getCount()}`,
];
