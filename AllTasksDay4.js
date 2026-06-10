console.log("Task 1: Age Category Finder");

{
let age = 25;

if(age >= 0 && age <= 12){
    console.log("Child");
}
else if(age >= 13 && age <= 19){
    console.log("Teenager");
}
else if(age >= 20 && age <= 59){
    console.log("Adult");
}
else{
    console.log("Senior Citizen");
}
}


console.log("Task 2: Salary Hike Calculator");

{
let salary = 30000;
let hike;

if(salary < 20000){
    hike = salary * 20 / 100;
}
else if(salary <= 50000){
    hike = salary * 10 / 100;
}
else{
    hike = salary * 5 / 100;
}

console.log("Old Salary : " + salary);
console.log("New Salary : " + (salary + hike));
}


console.log("Task 3: Electricity Department");

{
let units = 150;
let bill;

if(units <= 100){
    bill = units * 5;
}
else if(units <= 200){
    bill = units * 7;
}
else{
    bill = units * 10;
}

console.log("Bill : ₹" + bill);
}


console.log("Task 4: Simple ATM");

{
let balance = 10000;
let withdraw = 4000;

if(withdraw <= balance){
    balance -= withdraw;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance : ₹" + balance);
}
else{
    console.log("Insufficient Funds");
}
}


console.log("Task 5: Login Validation");

{
let username = "admin";
let password = "12345";

if(username == "admin" && password == "12345"){
    console.log("Login Success");
}
else{
    console.log("Login Failed");
}
}


console.log("Task 6: Mobile Recharge Offer");

{
let recharge = 499;

if(recharge >= 499){
    console.log("Netflix Offer");
}
else if(recharge >= 299){
    console.log("2GB Extra Data");
}
else{
    console.log("No Offer");
}
}


console.log("Task 7: Traffic Signal System");

{
let color = "Green";

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
        console.log("Invalid Color");
}
}


console.log("Task 8: Employee Attendance");

{
let workingDays = 30;
let presentDays = 25;

let percentage = (presentDays / workingDays) * 100;

console.log("Attendance : " + percentage + "%");

if(percentage >= 75){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}
}


console.log("Task 9: Bus Ticket Booking");

{
let ticketPrice = 500;
let tickets = 3;

let total = ticketPrice * tickets;
let gst = total * 5 / 100;
let finalAmount = total + gst;

console.log("Total Amount : ₹" + total);
console.log("GST : ₹" + gst);
console.log("Final Amount : ₹" + finalAmount);
}


console.log("Task 10: Restaurant Bill");

{
let foodCost = 2500;
let discount = 0;

if(foodCost > 2000){
    discount = foodCost * 10 / 100;
}

console.log("Final Bill : ₹" + (foodCost - discount));
}


console.log("Task 11: Police Recruitment");

{
let age = 20;
let height = 165;
let weight = 60;

if(age >= 18){
    if(height >= 160){
        if(weight >= 55){
            console.log("Selected");
        }
        else{
            console.log("Rejected: Weight");
        }
    }
    else{
        console.log("Rejected: Height");
    }
}
else{
    console.log("Rejected: Age");
}
}


console.log("Task 12: Student Result");

{
let m1=90,m2=80,m3=70,m4=85,m5=75;

let total=m1+m2+m3+m4+m5;
let percentage=total/5;

console.log("Total : "+total);
console.log("Percentage : "+percentage);

if(percentage>=90){
    console.log("A+");
}
else if(percentage>=80){
    console.log("A");
}
else if(percentage>=70){
    console.log("B");
}
else if(percentage>=60){
    console.log("C");
}
else{
    console.log("Fail");
}
}


console.log("Task 13: Employee Shift Finder");

{
let time = 10;

if(time>=6 && time<14){
    console.log("Morning Shift");
}
else if(time>=14 && time<22){
    console.log("Afternoon Shift");
}
else{
    console.log("Night Shift");
}
}


console.log("Task 14: Loan Eligibility");

{
let age=25;
let salary=30000;
let experience=3;

if(age>=21 && salary>=25000 && experience>=2){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}
}


console.log("Task 15: Cab Fare Calculator");

{
let distance=12;
let fare;

if(distance<=5){
    fare=distance*20;
}
else{
    fare=(5*20)+((distance-5)*15);
}

console.log("Fare : ₹"+fare);
}


console.log("Task 16: Multiplication Table");

{
let num=5;

for(let i=1;i<=10;i++){
    console.log(num+" x "+i+" = "+(num*i));
}
}


console.log("Task 17: Password Checker");

{
let length=8;

if(length<6){
    console.log("Weak");
}
else if(length<=10){
    console.log("Medium");
}
else{
    console.log("Strong");
}
}


console.log("Task 18: Company Bonus System");

{
let experience=4;
let salary=30000;
let bonus;

if(experience<=2){
    bonus=salary*5/100;
}
else if(experience<=5){
    bonus=salary*10/100;
}
else{
    bonus=salary*20/100;
}

console.log("Bonus : "+bonus);
}


console.log("Task 19: Countdown Timer");

{
let i=10;

while(i>=1){
    console.log(i);
    i--;
}

console.log("Happy New Year");
}


console.log("Task 20: Interview Selection System");

{
let degree=true;
let communication="Good";
let technicalScore=80;

if(degree){
    if(communication=="Good"){
        if(technicalScore>=70){
            console.log("Selected");
        }
        else{
            console.log("Rejected: Technical Score Low");
        }
    }
    else{
        console.log("Rejected: Communication Low");
    }
}
else{
    console.log("Rejected: Degree Not Completed");
}
}