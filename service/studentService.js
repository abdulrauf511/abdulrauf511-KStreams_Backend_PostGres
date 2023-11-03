const student = [
  { id: 1, name: "Harry" },
  { id: 2, name: "Babar" },
  { id: 3, name: "Rizzy" },
];
//Db operations
module.exports = {
  getStudent: () => {
    return student;
  },
  addStudent: (data) => {
    //add new Student to the array
    student.push(data);
    return student;
  },
  updatedStudentService: (studentID, data) => {
    const studentIndex = student.findIndex((u) => u.id == studentID);
    student[studentIndex] = { ...student[studentIndex], ...data };
    return student;
  },
  deleteStudent: (studentID) => {
    const studentIndex = student.findIndex((u) => u.id == studentID);
    student.splice(studentIndex, 1);
    return student;
  },
};
