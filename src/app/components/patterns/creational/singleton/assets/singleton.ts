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
