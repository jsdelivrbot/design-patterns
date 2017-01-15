export const data = {
  name: "Command",
  definition: `
    Encapsulate a request as an object, thereby letting you parameterize clients with different requests,
    queue or log requests, and support undoable operations.
  `,
  diagram: "",
  codePrint: `
    function add(x, y) { return x + y; }
    function sub(x, y) { return x - y; }
    function mul(x, y) { return x * y; }
    function div(x, y) { return x / y; }

    var Command = function (execute, undo, value) {
      this.execute = execute;
      this.undo = undo;
      this.value = value;
    }

    var AddCommand = function (value) {
      return new Command(add, sub, value);
    };
    var SubCommand = function (value) {
      return new Command(sub, add, value);
    };
    var MulCommand = function (value) {
      return new Command(mul, div, value);
    };
    var DivCommand = function (value) {
      return new Command(div, mul, value);
    };
    var Calculator = function () {
      var current = 0;
      var commands = [];

      function action(command) {
        var name = command.execute.toString().substr(9, 3);
        return name.charAt(0).toUpperCase() + name.slice(1);
      }

      return {
        execute: function (command) {
          current = command.execute(current, command.value);
          commands.push(command);
          log(action(command) + ": " + command.value);
        },

        undo: function () {
          var command = commands.pop();
          current = command.undo(current, command.value);
          log("Undo " + action(command) + ": " + command.value);
        },

        getCurrentValue: function () {
          return current;
        }
      }
    }

    var calculator = new Calculator();

    // issue commands
    calculator.execute(new AddCommand(100));
    calculator.execute(new SubCommand(24));
    calculator.execute(new MulCommand(6));
    calculator.execute(new DivCommand(2));

    // reverse last two commands
    calculator.undo();
    calculator.undo();

    log("Value: " + calculator.getCurrentValue());
  `,
}
