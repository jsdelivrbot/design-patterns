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
  light;
  go;
  constructor (light){
    this.light = light;
    this.go = function () {
      output.push("Red --> for 1 minute");
      light.change(new Green(light));
    }
  }
}
class Yellow {
  light;
  go;
  constructor (light){
    this.light = light;
    this.go = function () {
      output.push("Yellow --> for 10 seconds");
      light.change(new Red(light));
    }
  }
}
class Green {
  light;
  go;
  constructor (light){
    this.light = light;
    this.go = function () {
      output.push("Green --> for 1 minute");
      light.change(new Yellow(light));
    }
  }
}

let light = new TrafficLight();
let output = [];

light.start();

export {output};
