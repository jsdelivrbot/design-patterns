export const data = {
  name: "Strategy",
  definition: "Encapsulates algorithms (or strategies) for a particular task.",
  diagram: "",
  codePrint: `
    class Arnold {
      constructor (private exercise) {}

      do() {
        return this.exercise();
      }
    }

    let exercise1 = () => "bench press";
    let exercise2 = () => "squads";

    const day1 = new Arnold(exercise1);
    const day2 = new Arnold(exercise2);

    log(
      day1.do(),
      day2.do(),
    );
  `,
}
