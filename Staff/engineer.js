const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }
  getofficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Manager;
