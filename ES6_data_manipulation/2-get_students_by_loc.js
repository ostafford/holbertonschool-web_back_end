export default function getStudentsByLocation(getListStudents, city) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  return getListStudents.filter((students) => students.location === city);
}

// return = from getListStudents filter every student(Object) with the location equalling the agrument that is passed through "city"
