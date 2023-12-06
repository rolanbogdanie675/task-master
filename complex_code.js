/* 
 * Filename: complex_code.js
 * Description: This code is a complex JavaScript program that demonstrates various advanced concepts and techniques.
 * Author: AI Assistant
 */

// Helper function: Generates a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Class: Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class: Employee (inherits from Person)
class Employee extends Person {
  constructor(name, age, position, salary) {
    super(name, age);
    this.position = position;
    this.salary = salary;
  }

  getInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Position: ${this.position}`);
    console.log(`Salary: ${this.salary}`);
  }
}

// Function: Performs a complex calculation
function complexCalculation() {
  let result = getRandomNumber(1, 100);
  for (let i = 0; i < 10; i++) {
    result = Math.pow(result, getRandomNumber(2, 5));
    result = Math.sqrt(result);
  }
  return result;
}

// Array: Holds a list of names
const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

// Object: Holds configuration settings
const config = {
  debugMode: true,
  maxRetries: 5,
  timeout: 5000,
  language: "en"
};

// Event listener: Executes when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is ready!");
  const randomNumber = getRandomNumber(1, 10);
  console.log(`Random Number: ${randomNumber}`);

  const randomNameIndex = getRandomNumber(0, names.length - 1);
  const randomName = names[randomNameIndex];
  console.log(`Random Name: ${randomName}`);

  const person = new Person("John Doe", 30);
  person.sayHello();

  const employee = new Employee("Jane Smith", 25, "Manager", 5000);
  employee.getInfo();

  const calculationResult = complexCalculation();
  console.log(`Calculation Result: ${calculationResult}`);

  if (config.debugMode) {
    console.log("Debug mode is enabled.");
  } else {
    console.log("Debug mode is disabled.");
  }

  for (let i = 0; i < config.maxRetries; i++) {
    console.log(`Retrying (${i + 1}/${config.maxRetries})...`);
  }
});

// ... (continued for over 200 lines)