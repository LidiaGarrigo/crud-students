import Student from "src/app/models/Student";


const student1: Student = {
  id: 1660327415,
  name: "juan",
  surname: "Caracoli"
};

const student2: Student = {
  id: 1660328983,
  name: "Lola",
  surname: "CAracola"
};

const student3: Student = {
  id: 1660563783,
  name: "Hola",
  surname: ""
};

const mockStudentArray: Student[] = [student1, student2, student3];

export { student1, student2, student3, mockStudentArray };
