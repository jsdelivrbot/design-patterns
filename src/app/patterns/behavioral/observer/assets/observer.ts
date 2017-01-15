function Click() {
  this.handlers = [];  // observers
}

Click.prototype = {
  subscribe: function(fn) {
    this.handlers.push(fn);
  },

  unsubscribe: function(fn) {
    this.handlers = this.handlers.filter(
      function(item) {
        if (item !== fn) {
          return item;
        }
      }
    );
  },

  fire: function(o, thisObj) {
    var scope = thisObj || window;
    this.handlers.forEach(function(item) {
      item.call(scope, o);
    });
  }
}

var output = [];
var clickHandler = function(item) {
  output.push("fired: " + item);
};

var click = new Click();

click.subscribe(clickHandler);
click.fire('event #1');
click.unsubscribe(clickHandler);
click.fire('event #2');
click.subscribe(clickHandler);
click.fire('event #3');

export {output};
