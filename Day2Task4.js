let price = 2000;

let discount = price > 1000 ? price * 20 / 100 : 0;

let finalAmount = price - discount;

console.log(finalAmount);