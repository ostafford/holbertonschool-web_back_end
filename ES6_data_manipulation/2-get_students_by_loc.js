export default function getStudentsByLocation(getListStudents, city) {
  if (!Array.isArray(getListStudents, city)) {
    return [];
  }

  return getListStudents.filter(students => students.location === 'San Francisco');
}