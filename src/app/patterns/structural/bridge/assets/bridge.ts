class Gestures  {
  private output;

  constructor (output) {
    this.output = output;
  }

  tap() { return this.output.click(); }
  swipe() { return this.output.move(); }
  pan() { return this.output.drag(); }
  pinch() { return this.output.zoom(); }
}
class Mouse {
  private output;

  constructor (output) {
    this.output = output;
  }

  click() { return this.output.click(); }
  move() { return this.output.move(); }
  down() { return this.output.drag(); }
  wheel() { return this.output.zoom(); }
}

class Screen {
  click() { return "Screen select"; }
  move() { return "Screen move"; }
  drag() { return "Screen drag"; }
  zoom() { return "Screen zoom in"; }
}
class Audio {
  click() { return "Sound oink"; }
  move() { return "Sound waves"; }
  drag() { return "Sound screetch"; }
  zoom() { return "Sound volume up"; }
}

var screen = new Screen();
var audio = new Audio();

var hand = new Gestures(screen);
var mouse = new Mouse(audio);

export const output = [
  hand.tap(),
  hand.swipe(),
  hand.pinch(),
  mouse.click(),
  mouse.move(),
  mouse.wheel(),
];
