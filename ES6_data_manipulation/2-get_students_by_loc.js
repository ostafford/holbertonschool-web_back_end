export default function getStudentsByLocation(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  return getListStudents.filter(students => students.location === 'San Francisco');
}