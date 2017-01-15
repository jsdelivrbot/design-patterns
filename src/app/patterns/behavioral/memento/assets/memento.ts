// Memento
class Memento {
  state;
  constructor (state){
    this.state = state || 'undefined';
  }

  getState() { return this.state }
}

// Caretaker
class Caretaker {
  memento;

  getMemento() { return this.memento; }

  setMemento(_memento) {
    this.memento = _memento;
  }
}

// Originator - can create memento and know how to restore own state from it
class Originator {
  state
  setState (_state){
    this.state = _state || "undefined";
  }
  getState() { return this.state; }
  saveState() { return new Memento(this.state); }

  restoreState(memento) {
    this.state = memento.getState();
  }
}

let originator = new Originator();
let caretaker = new Caretaker();
let output = [];

originator.setState('on');
output.push('State is ' + originator.getState());
caretaker.setMemento(originator.saveState());

originator.setState('off');
output.push('State is ' + originator.getState());

originator.restoreState(caretaker.getMemento());
output.push('State is ' + originator.getState());

export {output};
