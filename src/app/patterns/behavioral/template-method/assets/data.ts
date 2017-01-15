export const data = {
  name: "Tempate method",
  definition: `
    Define the skeleton of an algorithm in an operation, deferring some steps to subclasses.
    Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure
  `,
  diagram: "",
  codePrint: `
    var datastore = {
      process() {
        this.connect();
        this.select();
        this.disconnect();
        return true;
      }
    }

    function inherit(proto) {
      var F = function() {};
      F.prototype = proto;
      return new F();
    }

    var PostgreSQL = inherit(datastore);
    // implement template steps
    PostgreSQL.connect = () => {
      log("PostgreSQL: connect step");
    };
    PostgreSQL.select = () => {
      log("PostgreSQL: select step");
    };
    PostgreSQL.disconnect = () => {
      log("PostgreSQL: disconnect step");
    };

    PostgreSQL.process();
  `,
}
