export const data = {
  name: "Abstract factory",
  definition: "Сreates instances with tunable type for a specific task",
  diagram: "",
  codePrint: `
    class User {
      constructor(private speak) {}

      say() {
        return this.speak;
      }
    }

    class UserFactory {
      static create(speak) {
        return new User(speak);
      }
    }

    let user1 = UserFactory.create("hello from User1");
    let user2 = UserFactory.create("hello from User2");

    log(
      user1.say(),
      user2.say(),
    );
  `,
}
