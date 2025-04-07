export default function getStudentsByLocation(studentLocation) {
  if (!Array.isArray(studentLocation)) {
    return [];
  }

  return studentLocation.filter(student => student.location === 'San Francisco');
}