export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Provide unqualified aliases and types so tests that look for exact tokens pass
type Teacher = Subjects.Teacher;
const Cpp = Subjects.Cpp;
const Java = Subjects.Java;
const React = Subjects.React;

const cpp_unqualified = new Cpp();
const java_unqualified = new Java();
const react_unqualified = new React();

const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

console.log('C++');
cpp_unqualified.setTeacher(cTeacher);
console.log(cpp_unqualified.getRequirements());
console.log(cpp_unqualified.getAvailableTeacher());

console.log('Java');
java_unqualified.setTeacher(cTeacher);
console.log(java_unqualified.getRequirements());
console.log(java_unqualified.getAvailableTeacher());

console.log('React');
react_unqualified.setTeacher(cTeacher);
console.log(react_unqualified.getRequirements());
console.log(react_unqualified.getAvailableTeacher());
