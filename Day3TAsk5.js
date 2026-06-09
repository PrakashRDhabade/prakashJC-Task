let purchase = 8000;

let discount;

if(purchase >= 10000){
    discount = purchase * 20 / 100;
}
else if(purchase >= 5000){
    discount = purchase * 10 / 100;
}
else if(purchase >= 2000){
    discount = purchase * 5 / 100;
}
else{
    discount = 0;
}

let finalAmount = purchase - discount;

console.log("Original Amount : " + purchase);
console.log("Discount : " + discount);
console.log("Final Amount : " + finalAmount);