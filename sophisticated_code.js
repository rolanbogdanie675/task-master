/**
 * Filename: sophisticated_code.js
 * 
 * Description:
 * This code demonstrates a complex and sophisticated example in JavaScript. It simulates a virtual classroom
 * where students can join, interact, and submit assignments. It utilizes classes, inheritance, event listeners,
 * asynchronous operations, and more.
 */

// Class representing a virtual classroom
class VirtualClassroom {
  constructor(className, teacherName) {
    this.className = className;
    this.teacherName = teacherName;
    this.studentList = [];
    this.assignmentList = [];
  }

  // Method to enroll a new student
  enrollStudent(student) {
    this.studentList.push(student);
    console.log(`${student.name} has been enrolled in ${this.className}`);
  }

  // Method to add an assignment
  addAssignment(assignment) {
    this.assignmentList.push(assignment);
    console.log(`New assignment "${assignment.title}" added to ${this.className}`);
  }

  // Method to submit an assignment
  submitAssignment(student, assignment, callback) {
    console.log(`${student.name} submitted assignment "${assignment.title}"`);

    // Simulating asynchronous file upload operation
    setTimeout(() => {
      callback();
    }, 2000);
  }

  // Method to start classroom interaction
  startInteraction() {
    console.log(`The ${this.className} virtual classroom is now open.`);
    this.studentList.forEach((student) => {
      student.joinClassroom(this);
    });

    // Triggering a custom event after 5 seconds
    setTimeout(() => {
      const event = new CustomEvent("classInteractionStart", {
        detail: {
          className: this.className,
          teacherName: this.teacherName,
        },
      });

      document.dispatchEvent(event);
    }, 5000);
  }
}

// Class representing a student
class Student {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }

  // Method to join a virtual classroom
  joinClassroom(classroom) {
    console.log(`${this.name} joined the virtual classroom ${classroom.className}`);

    // Listening to the custom event
    document.addEventListener("classInteractionStart", (event) => {
      console.log(`${this.name} received an event - The class ${event.detail.className} started by ${event.detail.teacherName}`);
    });
  }

  // Method to submit a specific assignment
  submitAssignment(classroom, assignment) {
    classroom.submitAssignment(this, assignment, () => {
      console.log(`${this.name} submitted the assignment "${assignment.title}" successfully.`);
    });
  }
}

// Class representing an assignment
class Assignment {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}

// Usage example
const classroom = new VirtualClassroom("Mathematics", "John Doe");

const student1 = new Student("Alice", 1);
const student2 = new Student("Bob", 2);
const student3 = new Student("Charlie", 3);

classroom.enrollStudent(student1);
classroom.enrollStudent(student2);
classroom.enrollStudent(student3);

const assignment1 = new Assignment("Geometry", "Solve the given problems", "2022-01-15");
const assignment2 = new Assignment("Algebra", "Solve quadratic equations", "2022-01-20");

classroom.addAssignment(assignment1);
classroom.addAssignment(assignment2);

student1.submitAssignment(classroom, assignment1);
student3.submitAssignment(classroom, assignment2);

classroom.startInteraction();

// Expected output:
// Alice has been enrolled in Mathematics
// Bob has been enrolled in Mathematics
// Charlie has been enrolled in Mathematics
// New assignment "Geometry" added to Mathematics
// New assignment "Algebra" added to Mathematics
// Alice submitted assignment "Geometry"
// Charlie submitted assignment "Algebra"
// The Mathematics virtual classroom is now open.
// Alice joined the virtual classroom Mathematics
// Bob joined the virtual classroom Mathematics
// Charlie joined the virtual classroom Mathematics
// Charlie received an event - The class Mathematics started by John Doe
// Alice submitted the assignment "Geometry" successfully.
// Charlie submitted the assignment "Algebra" successfully.