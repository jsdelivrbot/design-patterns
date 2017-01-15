export const data = {
  name: "Chain of responsibility",
  definition: "Linear call of one method which has to perform a specific task",
  diagram: "",
  codePrint: `
    class Request {
      constructor(amount) {
        this.amount = amount
        log("Requested: $" + amount);
      }
      get(bill) {
        var count = Math.floor(this.amount / bill);
        this.amount -= count * bill;
        log("Dispense " + count + " $" + bill + " bills");
        return this;
      }
    }

    let request = new Request(378);
    request.get(100).get(50).get(20).get(10).get(5).get(1);
  `,
}
