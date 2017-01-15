class Visitor {
  visitElement(context) {
    output.push(context.operation());
  }
}

class Element {
  accept(visitor) {
    visitor.visitElement(this);
  }
  operation() {
    return "some operation"
  }
}

let visitor = new Visitor();
let element = new Element();

let output = [];
element.accept(visitor)

export {output};
