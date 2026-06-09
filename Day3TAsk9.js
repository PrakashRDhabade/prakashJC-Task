let distance = 12;
let fare = 0;

if(distance <= 5){
    fare = distance * 20;
}
else if(distance <= 10){
    fare = (5 * 20) + ((distance - 5) * 15);
}
else{
    fare = (5 * 20) + (5 * 15) + ((distance - 10) * 10);
}

console.log("Total Fare : ₹" + fare);