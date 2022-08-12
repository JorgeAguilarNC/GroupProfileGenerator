const Employee = require("./employee");

class engineer extends Employee {
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
