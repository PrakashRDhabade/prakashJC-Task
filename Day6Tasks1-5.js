console.log("Task 1: Employee Bonus Calculator");

{
let employeeName = "Prakash";
let salary = 30000;
let experience = 5;
let bonus;

if(experience >= 5){
    bonus = salary * 20 / 100;
}
else if(experience >= 2){
    bonus = salary * 10 / 100;
}
else{
    bonus = salary * 5 / 100;
}

console.log("Employee Name : " + employeeName);
console.log("Final Salary : " + (salary + bonus));
}



console.log("Task 2: College Admission System");

{
let studentName = "Prakash";
let age = 18;
let percentage = 75;

if(age >= 17){
    if(percentage >= 60){
        console.log("Admission Approved");
    }
    else{
        console.log("Admission Rejected");
    }
}
else{
    console.log("Admission Rejected");
}
}

console.log("Task 3: Food Delivery Menu");

{
let choice = 1;

switch(choice){
    case 1:
        console.log("Order Confirmed : Pizza");
        break;
    case 2:
        console.log("Order Confirmed : Burger");
        break;
    case 3:
        console.log("Order Confirmed : Shawarma");
        break;
    case 4:
        console.log("Order Confirmed : Fried Rice");
        break;
    default:
        console.log("Invalid Choice");
}
}

console.log("Task 4: Attendance Tracker");

{
let students = [
"Prakash","Rahul","Kiran","Arun","Navi",
"Ravi","Ajay","John","Kumar","Manu"
];

let count = 0;

for(let student of students){
    console.log(student);
    count++;
}

console.log("Total Students : " + count);
}



console.log("Task 5: E-Commerce Cart");

{
let cart = [
    { product: "Mobile", price: 15000 },
    { product: "Headset", price: 2000 },
    { product: "Charger", price: 1000 }
];

let total = 0;
let expensive = cart[0];

for(let item of cart){
    console.log(item.product);
    total += item.price;

    if(item.price > expensive.price){
        expensive = item;
    }
}

console.log("Total Cart Value : " + total);
console.log("Most Expensive Product : " + expensive.product);
}