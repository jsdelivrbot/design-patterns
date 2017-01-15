var datastore = {
  process() {
    this.connect();
    this.select();
    this.disconnect();
    return true;
  }
}

function inherit(proto) {
  var F = function() {}
  F.prototype = proto;
  return new F();
}

var PostgreSQL = inherit(datastore);
// implement template steps
PostgreSQL.connect = () => {
  output.push("PostgreSQL: connect step");
};
PostgreSQL.select = () => {
  output.push("PostgreSQL: select step");
};
PostgreSQL.disconnect = () => {
  output.push("PostgreSQL: disconnect step");
};

let output = [];
PostgreSQL.process();

export {output};
