const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }
  getofficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Intern";
  }
}
module.exports = Manager;
