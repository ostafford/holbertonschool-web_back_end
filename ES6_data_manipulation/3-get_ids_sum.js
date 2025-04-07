export default function getListStudentIdsSum(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return 0;
  }

  return getListStudents.reduce((accumulator, students) => accumulator + students.id, 0);
}
