export default function getListStudentIdsSum(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return 0;
  }

  return getListStudents.reduce((accumulator, students) => accumulator + students.id, 0);
}

// reduce = start with accumulator value of 0, then for each student object in the array, 
// add that student's id to the accumulator. Return the final sum after processing all students.