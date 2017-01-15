export const data = {
  name: "Adapter",
  definition: `
    Convert the interface of a class into another interface clients expect.
    Adapter lets classes work together that couldn't otherwise because of incompatible interfaces
  `,
  diagram: "",
  codePrint: `
    // Target class
    var Duck = function() {
      this.quack = function() {
        return "Quack";
      };
      this.fly = function() {
        return "I am flying";
      };
    };

    // Adaptee class
    var Turkey = function() {
      this.gooble = function() {
        return "Gobble gooble";
      };
      this.fly = function() {
        return "I am flying a short distance";
      };
    };

    // Adapter class: interface Turkey to interface Duck
    var TurkeyAdapter = function(turkey) {
      var turkey = turkey;

      this.quack = function() {
        return turkey.gooble();
      };
      this.fly = function() {
        return turkey.fly();
      };
    };

    var duck = new Duck();
    var turkey = new Turkey();
    var turkeyAdapter = new TurkeyAdapter(turkey);

    log(
      turkeyAdapter.quack(),
      turkeyAdapter.fly(),
    );
  `,
}
