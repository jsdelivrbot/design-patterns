class Request {
  constructor(private amount) {
    output.push("Requested: $" + amount + "\n");
  }
  get(bill) {
    var count = Math.floor(this.amount / bill);
    this.amount -= count * bill;
    output.push("Dispense " + count + " $" + bill + " bills");
    return this;
  }
}

let output = [];
let request = new Request(378);
request.get(100).get(50).get(20).get(10).get(5).get(1);

export {output};
