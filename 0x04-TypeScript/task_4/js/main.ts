import { Subjects } from './subjects/Cpp';
import { Subjects as SubjectsJava } from './subjects/Java';
import { Subjects as SubjectsReact } from './subjects/React';
import { Subjects as TeacherNS } from './subjects/Teacher';

// Create and export constants for each subject
export const cpp = new Subjects.Cpp();
export const java = new SubjectsJava.Java();
export const react = new SubjectsReact.React();

// Create and export one Teacher object
export const cTeacher: TeacherNS.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// Cpp
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
["const cpp = new Cpp()"]
const cpp = new Subjects.Cpp();

["const java = new Java()"]
const java = new Java();

["const react = new React()"]
const react = new React();
import { Subjects } from './subjects/React'; // adjust the path if needed

const react = new Subjects.React();


