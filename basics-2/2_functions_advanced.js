function calculateCartPrice(...price){ 
//rest opetaor in function so that all the parameters are passed in a array 
//Example in case of cart we don't know how much items are going to be added so we need to use rest(...) operator
   return price;
}

console.log(calculateCartPrice(200,300,400,600)); //[ 200, 300, 400, 600 ]

const user={
    name: "Saumya",
    price: 1999
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`); 
}

handleObject(user); //Username is Saumya and price is 1999

handleObject({
    name :"Swati",
    price: 2000
}); //Username is Swati and price is 2000

const myArray=[200, 400, 600, 800];

function returnArray(getArray){
  return getArray;
}

console.log(returnArray(myArray)); //[ 200, 400, 600, 800 ]
console.log(returnArray([100,300,500,700,900])); //[ 100, 300, 500, 700, 900 ]