const empId = 1234
let empEmail = "testEmp@test.com"
var empAccount = "98765"
empCity = "Delhi"
let empState;

// empId = 2 // not allowed as it's defined as constant


empEmail = "testEmpNew@test.com"
empAccount = "987654"
empCity = "Noida"

console.log(empId);

/*
Prefer not to use var to declare variables
because of issue in block scope and functional scope as it can update the values in the whole coe
*/


console.table([empId, empEmail, empAccount, empCity, empState])