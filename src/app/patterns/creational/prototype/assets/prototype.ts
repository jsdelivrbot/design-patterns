function CustomerPrototype(proto) {
  this.proto = proto;

  this.clone = function() {
    var customer = new Customer();

    customer.name = proto.name;
    return customer;
  };
}

function Customer(name?) {
  this.name = name;

  this.say = function() {
    return `name: ${this.name}`;
  };
}

var proto = new Customer('Boba Fett');
var prototype = new CustomerPrototype(proto);
var customer = prototype.clone();
customer.say();

export const output = [customer.say()];
