function staff(employees) {
    employees.forEach(employee => {
        let employeeObj = {
            employeeName: employee,
            personalNum: employee.length
        };
        console.log(`Name: ${employeeObj.employeeName} - Personal Number: ${employeeObj.personalNum}`);
    });
}
staff([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);