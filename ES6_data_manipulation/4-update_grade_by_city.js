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
