export default function getStudentsByLocation(studentLocation) {
  if (!Array.isArray(studentLocation)) {
    return [];
  }

  return studentLocation.filter(students => students.location === 'San Francisco');
}