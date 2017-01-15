export const data = {
  name: "Flyweight",
  definition: `
    Instead of creating thousands of objects of a certain type,
    creates a single object that will hold the status of all of these objects.
  `,
  diagram: "",
  codePrint: `
      class Flyweight {
        constructor(model) {
          this.model = model
          // ..
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
        computers = {}
        count = 0

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

      log(
        'Computers: ' + computers.getCount()},
        'Flyweights:' + FlyWeightFactory.getCount()),
      );
  `,
}
