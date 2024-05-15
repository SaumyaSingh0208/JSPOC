// singleton -> when objects made using constructor
//Object.create();


//object literals

const mySymbol = Symbol("key1")

const user = {
   name:"Saumya",
   [mySymbol]: "mykey1",
   age: 24,
   email: "saumya0231@gmail.com",
   isLoggedIn: false,
   location: "Noida"
}

//Access object values
console.log(user.email);  //saumya0231@gmail.com
console.log(user["email"]); //saumya0231@gmail.com
console.log(user["mySymbol"]); //mykey1
console.log(typeof mySymbol);  //symbol when in object only mysymbol was used 
console.log(user[mySymbol]);   //mykey1
console.log(typeof mySymbol); //symbol when in object declaration mysymbol was replaced by [mysymbol]

user.email ="saumyasingh0208@gmail.com"
console.log(user.email); //saumyasingh0208@gmail.com
Object.freeze(user) //THis restricts from changing value further
user.email ="saumya0208@gmail.com"
console.log(user.email); //saumyasingh0208@gmail.com

user.greeting = function(){
    console.log("Hello user!");
}

user.greeting1 = function(){
    console.log(`Hello user, ${this.name}`);
}

console.log(user.greeting);
//[Function (anonymous)]
console.log(user.greeting()); 
//Hello user!
//undefined
console.log(user.greeting1()); 
// Hello user, Saumya
// undefined