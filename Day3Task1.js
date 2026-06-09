let basicSalary = 25000;

let hra = basicSalary * 20 / 100;
let bonus = basicSalary * 10 / 100;

let totalSalary = basicSalary + hra + bonus;
let tax = totalSalary * 5 / 100;

let finalSalary = totalSalary - tax;

console.log("Basic Salary : " + basicSalary);
console.log("HRA : " + hra);
console.log("Bonus : " + bonus);
console.log("Tax : " + tax);
console.log("Final Salary : " + finalSalary);