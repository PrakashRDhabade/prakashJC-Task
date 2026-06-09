let attendance = ["P","P","A","P","A","P","P"];

let present = 0;
let absent = 0;

for(let i = 0; i < attendance.length; i++){
    if(attendance[i] == "P"){
        present++;
    }
    else{
        absent++;
    }
}

console.log("Present Days : " + present);
console.log("Absent Days : " + absent);