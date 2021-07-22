const Employee = require("../lib/Employee");

test("Can create new Employee instance", () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "KamilleT";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("Set id byway of constructor argument", () => {
  const testValue = 100;
  const employee = new Employee("KamilleT", testValue);
  expect(employee.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const employee = new Employee("Kamille", 1, testValue);
  expect(employee.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Kamille";
  const employee = new Employee(testValue);
  expect(employee.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const employee = new Employee("Kamille", testValue);
  expect(employee.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const employee = new Employee("Kamille", 1, testValue);
  expect(employee.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const employee = new Employee("Kamille", 1, "test@test.com");
  expect(employee.getRole()).toBe(testValue);
});
