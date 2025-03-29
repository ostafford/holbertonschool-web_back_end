export default function createEmployeesObject(departmentName, employees) {
    // const empArray = [];

    // for (const idx of employees) {
    //     empArray.push(idx)
    // }
    // return `${departmentName}:` + empArray;
    return {
        [departmentName]: employees
    };
}