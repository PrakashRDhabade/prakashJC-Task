let employees = [
    {id:1,name:"Prakash",salary:25000},
    {id:2,name:"Kiran",salary:30000},
    {id:3,name:"Navi",salary:40000}
];

let highest = employees[0];
let lowest = employees[0];
let totalSalary = 0;

for(let emp of employees){

    console.log(emp);

    if(emp.salary > highest.salary){
        highest = emp;
    }

    if(emp.salary < lowest.salary){
        lowest = emp;
    }

    totalSalary += emp.salary;
}

console.log("Highest Salary Employee : " + highest.name);
console.log("Lowest Salary Employee : " + lowest.name);
console.log("Total Employees : " + employees.length);
console.log("Total Salary Expenditure : " + totalSalary);