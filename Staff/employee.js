class employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return thhis.email;
  }
  getRole() {
    return "employee";
  }
}
module.exports = employee;
