let product = {
    productName:"Laptop",
    price:50000,
    stock:10
};

for(let key in product){
    console.log(key + " : " + product[key]);
}