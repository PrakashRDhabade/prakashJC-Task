let helmet = false;
let license = false;

if(helmet == false && license == false){
    console.log("Fine : 3000");
}
else if(helmet == false){
    console.log("Fine : 1000");
}
else if(license == false){
    console.log("Fine : 2000");
}
else{
    console.log("No Fine");
}