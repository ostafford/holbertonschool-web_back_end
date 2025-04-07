export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }

  return studentList.map(student => student.id)
}

// function = getListStudentIds()
// parameter = (studentList)
// argument =     { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
// { id: 2, firstName: 'James', location: 'Columbia' },
// { id: 5, firstName: 'Serena', location: 'San Francisco' }

// if the studentList (argument) is NOT an array type then return an empty array.
// if however the array IS an array execute the return. 

// return = take the studentList array which the argument is the above example, to then map a loop to essentially loop through each object in the array and return the id value of each object. In this example it's basically saying that each object is called a "student" just to connect the dots that is. 