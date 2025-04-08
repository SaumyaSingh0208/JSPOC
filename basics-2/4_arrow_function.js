const user = {
    name: "Saumya",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`Welcome ${this.name}`);
        console.log(this) 
        // {
//   name: 'Saumya',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
    },
}

user.welcomeMessage(); //Welcome Saumya
user.name="Sam";
user.welcomeMessage(); //Welcome Sam

console.log(this); //{} but same will return windows when run on browser

//We can't use this in function and not even in arrow functions but only in objects.

const fun =()=>{
  let username ="hitesh"
  console.log(this.username);
} //undefined

//Basic arrow function 
//Explicit return
const addTwo=(num1, num2)=>{
   return num1+num2
}
console.log(addTwo(3,5));

//Implicit return -> We don't need to write return
const addTwo1=(num1, num2)=> num1+num2

//If there is curly braces we need to write return but this is not the case with paranthses
const addTwo2=(num1, num2)=> (num1+num2)

//return object
 const user1 =(name)=>({name:"Saumya"})

