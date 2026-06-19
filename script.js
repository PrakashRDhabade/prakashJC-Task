let products=[];
let cart=[];

let productBox=document.getElementById("products");
let search=document.getElementById("search");
let category=document.getElementById("category");


function loadProducts(){

fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{

products=data;

document.getElementById("status").innerHTML=
"Products Loaded Successfully";


displayProducts(products);

showStats();

})
.catch(error=>{
console.log(error);
})
.finally(()=>{
console.log("API Completed");
});

}


function displayProducts(data){

productBox.innerHTML="";


data.forEach(product=>{


let card=document.createElement("div");

card.className="card";


card.innerHTML=`

<img src="${product.image}">

<h3>${product.title}</h3>

<p>Price : ₹${product.price}</p>

<p>${product.category}</p>

<p>Rating : ${product.rating.rate}</p>

<button onclick="addCart(${product.id})">
Add To Cart
</button>

`;

productBox.append(card);


});


}



search.addEventListener("input",()=>{


let value=search.value.toLowerCase();


let result=products.filter(product=>
product.title.toLowerCase().includes(value)
);


displayProducts(result);


});



category.addEventListener("change",()=>{


let value=category.value;


if(value=="All"){

displayProducts(products);

}
else{


let result=products.filter(product=>
product.category==value
);


displayProducts(result);


}


});



function showStats(){


let total=products.length;


let average=
products.reduce((a,b)=>a+b.price,0)/total;


let highest=
products.sort((a,b)=>b.price-a.price)[0];


let lowest=
products.sort((a,b)=>a.price-b.price)[0];


document.getElementById("stats").innerHTML=`

<h3>Total Products : ${total}</h3>

<h3>Average Price : ₹${average.toFixed(2)}</h3>

<h3>Highest : ${highest.title}</h3>

<h3>Lowest : ${lowest.title}</h3>

`;


}



function addCart(id){


let product=
products.find(p=>p.id==id);


cart.push(product);


document.getElementById("cartCount").innerHTML=
cart.length;


displayCart();


}



function displayCart(){


let box=document.getElementById("cart");


box.innerHTML="";


cart.forEach(item=>{


box.innerHTML+=`

<p>
${item.title} 
<button onclick="removeCart(${item.id})">
Remove
</button>
</p>

`;

});


}



function removeCart(id){


cart=
cart.filter(item=>item.id!=id);


document.getElementById("cartCount").innerHTML=
cart.length;


displayCart();


}



loadProducts();