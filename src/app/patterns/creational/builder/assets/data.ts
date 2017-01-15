export const data = {
  name: "Buider",
  definition: "Encapsulates the product constructing and allows you to divide it into phases",
  diagram: "",
  codePrint: `
    function Shop() {
      this.construct = function(builder) {
        builder.step1();
        builder.step2();
        return builder.get();
      }
    }

    function CarBuilder() {
      this.car = null;

      this.step1 = function() {
        this.car = new Car();
      };

      this.step2 = function() {
        this.car.addParts();
      };

      this.get = function() {
        return this.car;
      };
    }

    function Car() {
      this.doors = 0;

      this.addParts = function() {
        this.doors = 4;
      };

      this.say = function() {
        return "I am a " + this.doors + "-door car";
      };
    }

    var shop = new Shop();
    var carBuilder = new CarBuilder();
    var car = shop.construct(carBuilder);

    log(car.say());
  `,
}
