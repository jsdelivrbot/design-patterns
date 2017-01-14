export const data = {
  name: "Singleton",
  definition: "Ensure a class has only one instance and provide a global point of access to it.",
  diagram: "",
  codePrint: `
    let instance;

    class Singleton {
      constructor(data) {
        if (!instance) {
          this.data = data;
          instance = this;
        } else {
          return instance;
        }
      }

      get data() {
        return this.data;
      }
    }

    let singleton1 = new Singleton(1);
    let singleton2 = new Singleton(2);

    log(
      singleton1.data,
      singleton2.data,
      singleton1 === singleton2,
      singleton1 instanceof Singleton,
      singleton2 instanceof Singleton,
    )
  `,
}
