export const data = {
  name: "Visitor",
  definition: `
    Determines the operation performed on each element of a structure.
    Allows, without altering these classes of objects, to add new operations therein.
    Allows to avoid contamination classe.
  `,
  diagram: "",
  codePrint: `
    class Visitor {
      visitElement(context) {
        // manipulate element
        log(context.operation());
      }
    }

    class Element {
      accept(visitor) {
        visitor.visitElement(this);
      }
      operation() {
        return "some operation";
      }
    }

    let visitor = new Visitor();
    let element = new Element();

    element.accept(visitor)
  `,
}
