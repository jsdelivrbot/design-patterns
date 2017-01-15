class User {
  constructor(
    private mediator,
    private name
  ) {}

  send(msg) {
    output.push(this.name + ": sending message: " + msg);
    this.mediator.sendMessage(msg, this);
  }

  receive(msg) {
    output.push(this.name + ": received message: " + msg);
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

let output = [];
Adam.send("Hi All");
Poll.send("Hi All");

export {output};
