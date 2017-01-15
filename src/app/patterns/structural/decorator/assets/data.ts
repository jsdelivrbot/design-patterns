export const data = {
  name: "Decorator",
  definition: "Allows additional functionality to be added to an object dynamically at run time",
  diagram: "",
  codePrint: `
    var User = function(name) {
      this.name = name;

      this.say = function() {
        return "User: " + this.name;
      };
    }

    var DecoratedUser = function(user, street, city) {
      this.user = user;
      this.name = user.name; // ensures interface stays the same
      this.street = street;
      this.city = city;

      this.say = function() {
        return "Decorated User: " + this.name + ", " +
                   this.street + ", " + this.city;
      };
    }

    var user = new User("Kelly");
    var decorated = new DecoratedUser(user, "Broadway", "New York");

    log(
      user.say();
      decorated.say();
    );
  `,
}
