console.log("Task 11: Amazon Order Tracker");

{
function sendSMS(){
    console.log("SMS Sent To Customer");
}

function placeOrder(callback){
    console.log("Order Placed Successfully");
    callback();
}

placeOrder(sendSMS);
}

console.log("Task 12: Cashback Offer Generator");

{
function* offers(){
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offer = offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
}

console.log("Task 13: Employee Database");

{
let employees = [
    {id:1,name:"Prakash",salary:25000},
    {id:2,name:"Kavin",salary:30000},
    {id:3,name:"John",salary:40000}
];

let totalSalary = 0;
let highest = employees[0];

for(let emp of employees){
    console.log(emp.name);

    totalSalary += emp.salary;

    if(emp.salary > highest.salary){
        highest = emp;
    }
}

console.log("Total Salary Expense : " + totalSalary);
console.log("Highest Salary Employee : " + highest.name);
}

console.log("Task 14: Railway Reservation System");

{
let seats = 50;

function bookSeat(count){
    if(count <= seats){
        seats -= count;
        console.log("Booking Successful");
        console.log("Available Seats : " + seats);
    }
    else{
        console.log("Seats Not Available");
    }
}

bookSeat(5);
bookSeat(10);
bookSeat(40);
}

console.log("Task 15: Mobile Store Billing System");

{
let products = {
    Mobile:15000,
    Laptop:50000,
    Headphone:2000,
    Smartwatch:5000
};

let selectedProducts = ["Mobile","Headphone","Smartwatch"];

let total = 0;

for(let item of selectedProducts){
    console.log(item);
    total += products[item];
}

let gst = total * 18 / 100;
let finalBill = total + gst;

console.log("Total Amount : ₹" + total);
console.log("GST : ₹" + gst);
console.log("Final Bill : ₹" + finalBill);
}