const employee = require("../Staff/employee");
const employee = new employee("Jaime", "198354", "Jaime21@yahoo.com");

test("test to get consturctor values and employee object", () => {
  expect(employee.name).toBe("Jaime");
  expect(employee.id).toBe("198354");
  expect(employee.email).toBe("Jaime21@gmail.com");
});

test("test recall name form getName() method", () => {
  expect(employee.getName()).toBe("Jaime");
});

test("test geID () method", () => {
  expect(employee.getId()).toBe("198354");
});

test("test the email address geEmail() method", () => {
  expect(employee.getEmail()).toBe("tes");
});

test("test the role of employee getRole() method", () => {
  expect(employee.getRole()).toBe("employee");
});
