console.log("Task 1: Student Management System");

{
let students = [
    {id:1,name:"Prakash",department:"CSE",mark:90},
    {id:2,name:"Rahul",department:"ECE",mark:75},
    {id:3,name:"Kiran",department:"ISE",mark:85},
    {id:4,name:"Navi",department:"CSE",mark:45},
    {id:5,name:"Arun",department:"EEE",mark:60}
];

function studentDetails(student){
    console.log(student.name, student.department, student.mark);
}

let total = 0;

for(let student of students){
    console.log(student.name);
    total += student.mark;

    if(student.mark > 80){
        console.log("Above 80:", student.name);
    }

    if(student.mark >= 90){
        console.log("Grade A");
    }
    else if(student.mark >= 75){
        console.log("Grade B");
    }
    else if(student.mark >= 50){
        console.log("Grade C");
    }
    else{
        console.log("Fail");
    }

    studentDetails(student);
}

console.log("Total Marks:", total);
}


console.log("Task 2: Employee Payroll System");

{
let employees = [
    {id:1,name:"Prakash",salary:40000,department:"IT"},
    {id:2,name:"Rahul",salary:25000,department:"HR"},
    {id:3,name:"Kiran",salary:35000,department:"Finance"}
];

function payrollReport(emp){
    console.log(emp.name, emp.salary);
}

let expense = 0;

for(let emp of employees){
    console.log(emp.name);
    expense += emp.salary;

    if(emp.salary > 30000){
        console.log(emp.name);
    }

    switch(emp.department){
        case "IT":
            console.log("Technology");
            break;
        case "HR":
            console.log("Human Resource");
            break;
        case "Finance":
            console.log("Accounts");
            break;
    }

    payrollReport(emp);
}

console.log("Total Salary:", expense);
}


console.log("Task 3: Online Food Order System");

{
let foods = [
    {id:1,foodName:"Pizza",price:300,category:"Fast Food"},
    {id:2,foodName:"Biryani",price:250,category:"Indian"},
    {id:3,foodName:"Tea",price:50,category:"Drink"}
];

function orderConfirm(food){
    console.log("Order Confirmed:",food.foodName);
}

let value = 0;

for(let food of foods){
    console.log(food.foodName);
    value += food.price;

    if(food.price > 200){
        console.log("High Price:",food.foodName);
    }

    switch(food.category){
        case "Fast Food":
            console.log("Junk Food");
            break;
        case "Indian":
            console.log("Traditional Food");
            break;
        case "Drink":
            console.log("Beverage");
    }

    orderConfirm(food);
}

console.log("Menu Value:",value);
}


console.log("Task 4: Movie Ticket Booking System");

{
let movies = [
    {movieName:"Leo",ticketPrice:200,availableSeats:50,language:"Tamil"},
    {movieName:"KGF",ticketPrice:250,availableSeats:30,language:"Kannada"}
];

function booking(movie){
    console.log("Booking Confirmed:",movie.movieName);
}

for(let movie of movies){

    console.log(movie.movieName);

    if(movie.availableSeats > 0){
        console.log("Booking Possible");
    }

    switch(movie.language){
        case "Tamil":
            console.log("Tamil Movie");
            break;
        case "Kannada":
            console.log("Kannada Movie");
            break;
    }

    booking(movie);
}
}


console.log("Task 5: Hospital Patient Records");

{
let patients=[
    {patientId:1,patientName:"Prakash",age:65,disease:"Heart"},
    {patientId:2,patientName:"Rahul",age:40,disease:"Fever"}
];

function appointment(patient){
    console.log("Appointment:",patient.patientName);
}

let count=0;

for(let patient of patients){

    console.log(patient.patientName);
    count++;

    if(patient.age > 60){
        console.log("Senior Patient:",patient.patientName);
    }

    switch(patient.disease){
        case "Heart":
            console.log("Cardiology");
            break;
        case "Fever":
            console.log("General");
    }

    appointment(patient);
}

console.log("Total Patients:",count);
}


console.log("Task 6: Library Management System");

{
let books=[
    {bookId:1,bookName:"JavaScript",author:"Prakash",price:700},
    {bookId:2,bookName:"Java",author:"Rahul",price:400}
];

function issueBook(book){
    console.log("Issued:",book.bookName);
}

let total=0;

for(let book of books){

    console.log(book.bookName);
    total+=book.price;

    if(book.price>500){
        console.log("Expensive:",book.bookName);
    }

    issueBook(book);
}

console.log("Total Value:",total);
}


console.log("Task 7: E-Commerce Product Dashboard");

{
let products=[
    {productId:1,productName:"Laptop",price:50000,stock:5},
    {productId:2,productName:"Mouse",price:1000,stock:20}
];

function report(product){
    console.log(product.productName);
}

let inventory=0;

for(let product of products){

    console.log(product.productName);

    inventory += product.price * product.stock;

    if(product.stock < 10){
        console.log("Low Stock");
    }

    report(product);
}

console.log("Inventory:",inventory);
}


console.log("Task 8: College Admission System");

{
let applicants=[
{name:"Prakash",age:22,percentage:80,department:"CSE"},
{name:"Rahul",age:17,percentage:90,department:"ECE"}
];

function result(applicant){
    console.log(applicant.name,"Admission Checked");
}

let eligible=0;

for(let app of applicants){

    console.log(app.name);

    if(app.age>=18 && app.percentage>=60){
        eligible++;
        console.log("Eligible");
    }
    else{
        console.log("Not Eligible");
    }

    switch(app.department){
        case "CSE":
            console.log("Computer Science");
            break;
        case "ECE":
            console.log("Electronics");
    }

    result(app);
}

console.log("Eligible Count:",eligible);
}


console.log("Task 9: Bus Reservation System");

{
let passengers=[
{id:1,name:"Prakash",seatNumber:10,ticketPrice:500},
{id:2,name:"Rahul",seatNumber:11,ticketPrice:500}
];

function ticket(passenger){
    console.log("Ticket Confirmed:",passenger.name);
}

let collection=0;

for(let p of passengers){

    console.log(p.name);

    collection+=p.ticketPrice;

    console.log("Seat:",p.seatNumber);

    ticket(p);
}

console.log("Collection:",collection);
}


console.log("Task 10: Mobile Store Management");

{
let mobiles=[
{brand:"Samsung",model:"S24",price:60000,stock:5},
{brand:"Apple",model:"iPhone",price:80000,stock:8}
];

function salesReport(mobile){
    console.log(mobile.brand, mobile.model);
}

let value=0;

for(let mobile of mobiles){

    console.log(mobile.model);

    value += mobile.price * mobile.stock;

    if(mobile.price > 20000){
        console.log("Premium Mobile");
    }

    switch(mobile.brand){
        case "Samsung":
            console.log("Android");
            break;
        case "Apple":
            console.log("iOS");
            break;
    }

    salesReport(mobile);
}

console.log("Total Stock Value:",value);
}