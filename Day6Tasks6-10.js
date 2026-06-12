console.log("Task 6: Bank Account Management");

{
let balance = 10000;

function deposit(amount){
    balance += amount;
}

function withdraw(amount){
    balance -= amount;
}

function checkBalance(){
    console.log("Current Balance : " + balance);
}

deposit(5000);
withdraw(2000);
checkBalance();
}

console.log("Task 7: Movie Ticket Booking");

{
let age = 25;

if(age < 5){
    console.log("Free Ticket");
}
else if(age <= 18){
    console.log("Ticket Price : ₹100");
}
else if(age <= 60){
    console.log("Ticket Price : ₹200");
}
else{
    console.log("Ticket Price : ₹120");
}
}

console.log("Task 8: Online Shopping Discount");

{
let amount = 6000;
let discount = 0;

if(amount > 5000){
    discount = amount * 20 / 100;
}
else if(amount > 3000){
    discount = amount * 10 / 100;
}
else if(amount > 1000){
    discount = amount * 5 / 100;
}

console.log("Original Amount : ₹" + amount);
console.log("Discount : ₹" + discount);
console.log("Final Amount : ₹" + (amount - discount));
}

console.log("Task 9: Food Inventory System");

{
let inventory = ["Rice","Oil","Sugar","Milk","Egg"];

inventory.push("Bread");
inventory.push("Butter");

inventory.shift();
inventory.pop();

console.log("Milk Exists : " + inventory.includes("Milk"));
console.log(inventory);
}

console.log("Task 10: Hospital Patient Management");

{
let patient = {
    patientName : "Prakash",
    age : 22,
    disease : "Fever",
    doctor : "Dr Kumar"
};

for(let key in patient){
    console.log(key + " : " + patient[key]);
}

let {patientName, age, disease, doctor} = patient;

console.log(patientName);
console.log(age);
console.log(disease);
console.log(doctor);
}