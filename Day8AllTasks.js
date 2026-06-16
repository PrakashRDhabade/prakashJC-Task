console.log("Task 1: Employee Salary Management");

{
let employees=[
{id:1,name:"Prakash",salary:25000},
{id:2,name:"Kavin",salary:50000},
{id:3,name:"John",salary:75000}
];

let aboveSalary=employees.filter(e=>e.salary>40000);
let firstHigh=employees.find(e=>e.salary>60000);
let totalSalary=employees.reduce((a,b)=>a+b.salary,0);
let names=employees.map(e=>e.name);

console.log(aboveSalary);
console.log(firstHigh);
console.log(totalSalary);
console.log(names);
}


console.log("Task 2: College Admission Form");

{
function admission(name,age,percentage){
if(age>=18 && percentage>=60){
return name+" Admission Approved";
}
else{
return name+" Admission Rejected";
}
}

console.log(admission("Prakash",22,75));
}


console.log("Task 3: E-Commerce Cart");

{
let cart=[
{product:"Shoes",price:2000,qty:2},
{product:"Watch",price:1500,qty:1},
{product:"Bag",price:1000,qty:3}
];

let total=cart.reduce((a,b)=>a+(b.price*b.qty),0);
let expensive=cart.reduce((a,b)=>a.price>b.price?a:b);
let products=cart.map(p=>p.product);

console.log(total);
console.log(expensive);
console.log(products);
}


console.log("Task 4: Traffic Fine System");

{
let signal="red";
let fine=500;

switch(signal){
case "red":
console.log("Stop");
console.log("Fine : "+fine);
break;

case "yellow":
console.log("Ready");
break;

case "green":
console.log("Go");
break;

default:
console.log("Invalid Signal");
}
}


console.log("Task 5: Student Result Processing");

{
let students=[
{name:"Prakash",mark:95},
{name:"Kavin",mark:45},
{name:"John",mark:80},
{name:"Arun",mark:30}
];

let pass=students.filter(s=>s.mark>=50);
let fail=students.filter(s=>s.mark<50);

let grade=students.map(s=>{
if(s.mark>=90)return "A";
else if(s.mark>=75)return "B";
else if(s.mark>=50)return "C";
else return "Fail";
});

console.log(pass);
console.log(fail);
console.log(grade);
}


console.log("Task 6: Online Food Delivery");

{
function placeOrder(customerName,...items){
console.log(customerName);
console.log(items);
console.log("Total Items : "+items.length);
}

placeOrder("Prakash","Pizza","Burger","Juice");
}


console.log("Task 7: Bank Account System");

{
let balance=10000;

function deposit(amount){
balance+=amount;
return balance;
}

function withdraw(amount){
balance-=amount;
return balance;
}

function checkBalance(){
return balance;
}

console.log(deposit(5000));
console.log(withdraw(2000));
console.log(checkBalance());
}


console.log("Task 8: Movie Ticket Booking");

{
let seats=["A1","A2","B1"];

for(let seat of seats){
console.log("Booked Seat : "+seat);
}

console.log("Total Seats : "+seats.length);
}


console.log("Task 9: User Login Validation");

{
let username="Prakash";
let password="12345678";
let email="prakash@gmail.com";

if(!username.includes(" ") && password.length>=8 && email.includes("@")){
console.log("Login Valid");
}
else{
console.log("Login Invalid");
}
}


console.log("Task 10: Product API Dashboard");

{
fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{

data.forEach(product=>{
console.log(product.title);
});

let expensive=data.filter(p=>p.price>1000);

console.log(expensive);
console.log("Total Products : "+data.length);

})
.catch(error=>console.log(error));
}


console.log("Task 11: Birthday Day Finder");

{
let dob=new Date("2003-05-15");

console.log("Day : "+dob.getDate());
console.log("Month : "+(dob.getMonth()+1));
console.log("Year : "+dob.getFullYear());
console.log("Weekday : "+dob.toLocaleDateString("en",{weekday:"long"}));
}


console.log("Task 12: Netflix Subscription System");

{
let plan="Premium";

let benefits =
plan==="Mobile" ? "1 Device" :
plan==="Basic" ? "HD Quality" :
plan==="Standard" ? "Full HD" :
plan==="Premium" ? "4K Quality" :
"No Plan";

console.log(benefits);
}


console.log("Task 13: Hospital Patient Management");

{
let patients=[
{id:1,name:"Prakash",status:"Critical"},
{id:2,name:"Kiran",status:"Normal"},
{id:3,name:"Rahul",status:"Critical"}
];

let critical=patients.filter(p=>p.status==="Critical");
let patient=patients.find(p=>p.id===2);

console.log(critical);
console.log(patient);
console.log(patients.length);
}


console.log("Task 14: Inventory Management System");

{
let first=[
{name:"Mobile",price:15000}
];

let second=[
{name:"Laptop",price:50000}
];

let inventory=[...first,...second];

let {name,price}=inventory[0];

let newInventory=[
...inventory,
{name:"Watch",price:5000}
];

console.log(name);
console.log(price);
console.log(newInventory);
}


console.log("Task 15: WhatsApp Group Management");

{
let group=["Prakash","Kavin"];

group.push("Rahul");
group.unshift("Admin");
group.pop();
group.shift();
group.splice(1,0,"John");

console.log(group);
}