let balance = 5000;
let amount = 2000;

if(amount > balance){
    console.log("Insufficient Balance");
}
else{
    balance = balance - amount;
    console.log("Withdrawal Success");
    console.log("Remaining Balance : " + balance);
}