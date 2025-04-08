export default function updateStudentGradeByCity(students, city, newGrades) {
  // Check if students is an array
  if (!Array.isArray(students)) {
    return [];
  }

  return students.filter((students) => students.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

      const gradeValue = gradeObj ? gradeObj.grade : 'N/A';
      return {
        ...student,
        grade: gradeValue,
      };
    });
}


//"gradeValue = if the gradeObj (variable beforehand) is true to have a value then assign or make the value of "gradeValue the value of gradeObj.grade:"  does that make sense and correct?

// ...student means to return all the students properties and then add a new property in the object that is called (key) grade and the value of the latest variable because of my previous explanation that is what the value will be. 