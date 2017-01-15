let instance;

export class Singleton {
  public data;

  constructor(data) {
    if (!instance) {
      this.data = data;
      instance = this;
    }
    else
      return instance;
  }

  get singletonData() {
    return this.data;
  }
}

let singleton1 = new Singleton(1);
let singleton2 = new Singleton(2);

export const output = [
  singleton1.data,
  singleton2.data,
  singleton1 === singleton2,
  singleton1 instanceof Singleton,
  singleton2 instanceof Singleton,
];
