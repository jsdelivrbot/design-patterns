export const data = {
  name: "State",
  definition: "Controls the behavior of the object change when you change it's internal state",
  diagram: "",
  codePrint: `
    class TrafficLight {
      count = 0;
      currentState = new Red(this);

      change (state){
        // limits number of changes
        if (this.count++ >= 10) return;
        this.currentState = state;
        this.currentState.go();
      }
      start (){
        this.currentState.go();
      }
    }

    class Red {
      constructor (light){
        this.light = light;
        this.go = function () {
          log("Red --> for 1 minute");
          light.change(new Green(light));
        }
      }
    }
    class Yellow {
      constructor (light){
        this.light = light;
        this.go = function () {
          log("Yellow --> for 10 seconds");
          light.change(new Red(light));
        }
      }
    }
    class Green {
      constructor (light){
        this.light = light;
        this.go = function () {
          log("Green --> for 1 minute");
          light.change(new Yellow(light));
        }
      }
    }

    let light = new TrafficLight();
    light.start();
  `,
}
