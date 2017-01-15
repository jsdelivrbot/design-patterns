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

export const output = [
  user.say(),
  decorated.say(),
];
