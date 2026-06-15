console.log("Task 1: Traffic Signal Management");

{
let color = "Red";

switch(color){
case "Red":
console.log("Stop");
break;
case "Yellow":
console.log("Ready");
break;
case "Green":
console.log("Go");
break;
default:
console.log("Invalid Signal");
}
}


console.log("Task 2: Employee Attendance Report");

{
for(let i=1;i<=30;i++){
console.log("Employee "+i+" Present");
}
}


console.log("Task 3: ATM Cash Withdrawal");

{
let balance=10000;

while(balance>0){
balance-=500;
console.log("Remaining Balance : "+balance);
}
}


console.log("Task 4: College Admission Eligibility");

{
let age=20;
let percentage=75;
let exam=true;

if(age>=18){
if(percentage>=70){
if(exam){
console.log("Admission Approved");
}
else{
console.log("Rejected: Entrance Exam Failed");
}
}
else{
console.log("Rejected: Percentage Low");
}
}
else{
console.log("Rejected: Age Not Eligible");
}
}


console.log("Task 5: Food Delivery Status");

{
function delivery(customerName,foodItem,address){
console.log("Customer : "+customerName);
console.log("Food : "+foodItem);
console.log("Address : "+address);
console.log("Delivery Confirmed");
}

delivery("Prakash","Biryani","Bangalore");
}


console.log("Task 6: Salary Processing System");

{
function calculateSalary(){
return 30000;
}

function calculateBonus(salary){
return salary*10/100;
}

let salary=calculateSalary();
let bonus=calculateBonus(salary);

console.log("Salary : "+salary);
console.log("Bonus : "+bonus);
}


console.log("Task 7: E-commerce Discount Engine");

{
function generateInvoice(amount){
console.log("Final Amount : "+amount);
}

function applyDiscount(price,callback){
let discount=price*20/100;
callback(price-discount);
}

applyDiscount(5000,generateInvoice);
}


console.log("Task 8: Promotional Offers");

{
function* offers(){
yield "10% OFF";
yield "20% OFF";
yield "Free Delivery";
yield "Buy 1 Get 1";
}

let offer=offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
}


console.log("Task 9: Student Database Merge");

{
let scienceStudents=["Prakash","Rahul"];
let commerceStudents=["Kiran","Arun"];

let students=[...scienceStudents,...commerceStudents];

console.log(students);
}


console.log("Task 10: Online Exam System");

{
function marks(studentName,...marks){
let total=0;

for(let mark of marks){
total+=mark;
}

console.log(studentName+" Total : "+total);
}

marks("Prakash",80,90,85);
}


console.log("Task 11: Employee Profile");

{
let employee={
name:"Prakash",
department:"IT",
salary:40000,
experience:3
};

let {name,department,salary,experience}=employee;

console.log(name);
console.log(department);
console.log(salary);
console.log(experience);
}


console.log("Task 12: Product Inventory Filter");

{
let products=[
{name:"Laptop",price:50000},
{name:"Mouse",price:1000},
{name:"Mobile",price:20000}
];

let result=products.filter(product=>product.price>5000);

console.log(result);
}


console.log("Task 13: Find Premium Customer");

{
let customers=[
{name:"Prakash",amount:30000},
{name:"Rahul",amount:60000},
{name:"Kiran",amount:70000}
];

let customer=customers.find(c=>c.amount>50000);

console.log(customer);
}


console.log("Task 14: Company Expense Tracker");

{
let expenses=[1000,2000,3000];

let total=expenses.reduce((a,b)=>a+b);

console.log(total);
}


console.log("Task 15: Gaming Tournament Verification");

{
let players=[
{name:"A",age:20},
{name:"B",age:25},
{name:"C",age:17}
];

let result=players.every(p=>p.age>=18);

console.log(result);
}


console.log("Task 16: Job Portal Search");

{
let candidates=[
{name:"Prakash",skill:"React"},
{name:"Rahul",skill:"Java"}
];

let result=candidates.some(c=>c.skill=="React");

console.log(result);
}


console.log("Task 17: Mobile Number Validator");

{
let number="9876543210";

if(number.length==10 && number.startsWith("9")){
console.log("Valid Number");
}
else{
console.log("Invalid Number");
}
}


console.log("Task 18: URL Slug Generator");

{
let text="Learn JavaScript Complete Course";

let slug=text.toLowerCase().split(" ").join("-");

console.log(slug);
}


console.log("Task 19: Employee Sorting Dashboard");

{
let employees=[
{name:"Prakash",salary:30000},
{name:"Rahul",salary:50000},
{name:"Kiran",salary:20000}
];

let highToLow=employees.sort((a,b)=>b.salary-a.salary);

console.log(highToLow);

let lowToHigh=employees.sort((a,b)=>a.salary-b.salary);

console.log(lowToHigh);
}


console.log("Task 20: Movie Booking System");

{
let movies=["Leo","KGF","Jailer"];

let bookings=movies.map((movie,index)=>({
movie:movie,
bookingId:index+1
}));

console.log(bookings);
}