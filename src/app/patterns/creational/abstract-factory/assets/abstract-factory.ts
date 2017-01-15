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
