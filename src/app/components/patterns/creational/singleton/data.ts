export const data = {
  name: "Singleton",
  definition: "Ensure a class has only one instance and provide a global point of access to it.",
  diagram: "",
  codePrint: `
    let instance;
    class Cache {
      constructor() {
        if(!instance) instance = this;

        this.time = new Date();
        return instance;
      }
    }
    let cache = new Cache();

    setTimeout(() => {
      let cache = new Cache();
      console.log(cache.time);
    }, 4000);
  `,
}
