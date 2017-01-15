export const data = {
  name: "Factory method",
  definition: "",
  diagram: "",
  codePrint: `
    class Factory {
      createEmployee(type) {
        let employee;

        switch(type) {
          case "fulltime":
            employee = new FullTime();
            break;
          case "parttime":
            employee = new PartTime();
            break;
          case "temporary":
            employee = new Temporary();
            break;
        }

        employee.type = type;

        employee.say = function() {
            return 'this.type + ": rate " + this.hourly + "/hour"';
        }

        return employee;
      }
    }

    class FullTime  { hourly = "$12" }
    class PartTime  { hourly = "$11" }
    class Temporary { hourly = "$10" }

    let factory = new Factory();
    let employee1 = factory.createEmployee("fulltime");
    let employee2 = factory.createEmployee("parttime");
    let employee3 = factory.createEmployee("temporary");

    log(
      employee1.say(),
      employee2.say(),
      employee3.say(),
    );
  `,
}
