var employee = {
    name: "Hari",
    department: "HR",
    salary: 45000,
}

console.log(employee.name);
console.log(employee["name"]);
console.log(employee.salary);
console.log(employee["salary"]);


// Adding new attribute to object

employee.gender = "male";
employee["isActive"] = true;

console.log(employee);


// Update value

employee.salary += 5000;
employee["salary"] += 5000

console.log(employee.salary)


// Check attribute existing or not
// using "in" keyword

console.log("gender" in employee);
