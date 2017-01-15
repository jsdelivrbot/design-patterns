class User {
  constructor(private speak) {}

  say() {
    return this.speak;
  }
}

export class UserFactory {
  static create(speak) {
    return new User(speak);
  }
}

let user1 = UserFactory.create("hello from User1");
let user2 = UserFactory.create("hello from User2");

user1.say();
user2.say();

export const output = [
  user1.say(),
  user2.say(),
];
