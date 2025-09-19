["export function isDirector"]

interface Director {
  name: string;
  age: number;
  // Director-specific property
  numberOfReports: number;
}

interface Teacher {
  name: string;
  age: number;
  // Teacher-specific property
  subject: string;
}

// Function to create employee
function createEmployee(salary: number): Director | Teacher {
  if (salary > 500) {
    return { name: "Director", age: 40, numberOfReports: 5 };
  } else {
    return { name: "Teacher", age: 30, subject: "Math" };
  }
}

// Type predicate to check if employee is Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).numberOfReports !== undefined;
}

// Task functions
function workDirectorTasks() {
  console.log("Getting to director tasks");
}

function workTeacherTasks() {
  console.log("Getting to work");
}

// executeWork function
function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    workDirectorTasks();
  } else {
    workTeacherTasks();
  }
}

["return employee.workDirectorTasks()", "return employee.workTeacherTasks()"]
function executeWork(employee: Employee) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks(); // <-- add return
  } else {
    return employee.workTeacherTasks(); // <-- add return
  }
}


// Test
executeWork(createEmployee(200));   // Getting to work
executeWork(createEmployee(1000));  // Getting to director tasks
