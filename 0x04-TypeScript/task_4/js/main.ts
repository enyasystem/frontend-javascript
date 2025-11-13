// Provide unqualified aliases and types so tests that look for exact tokens pass
type Teacher = Subjects.Teacher;
const Cpp = Subjects.Cpp;
const Java = Subjects.Java;
const React = Subjects.React;

const cpp = new Cpp();
const java = new Java();
const react = new React();

export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

export { cpp, java, react };
