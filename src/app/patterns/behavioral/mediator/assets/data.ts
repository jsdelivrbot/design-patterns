export const data = {
  name: "Mediator",
  definition: `
    Used to centralize the complex interactions,
    each object know about Mediator and do not now about other objects
  `,
  diagram: "",
  codePrint: `
    class User {
      constructor(
        private mediator,
        private name
      ) {}

      send(msg) {
        log(this.name + ": sending message: " + msg);
        this.mediator.sendMessage(msg, this);
      }

      receive(msg) {
        log(this.name + ": received message: " + msg);
      }
    }

    var chatMediator = {
      users: [],
      addUser(user) {
        this.users.push(user);
      },
      sendMessage(msg, user) {
        this.users.forEach((u, i) => {
          if (this.users[i] !== user) this.users[i].receive(msg);
        });
      },
    };

    var Adam = new User(chatMediator, "Adam");
    var Poll = new User(chatMediator, "Poll");

    chatMediator.addUser(Adam);
    chatMediator.addUser(Poll);

    Adam.send("Hi All");
    Poll.send("Hi All");
  `,
}
