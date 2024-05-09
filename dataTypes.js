let name ="Saumya"  //string
let age=24  //number
let isAbleToVote = true  //boolean

// DataTypes in js

//Primitive Datatypes
// number
// string => ""
// boolean => true/false
// null => standalone value (is empty)
// undefined => variable is declared but not assigned.
// symbol => to find uniquenss
// bigInt 

//Non primitive DataType => Refrence Type
//Objects
//Array
//Functions

const technologies =["JS", "HTML" , "React"]

let myObject = {
    name: "Saumya",
    age: 24,
}

const myFunction=function(){

}


console.log("Data type for null "+typeof null); // Output will be Object
console.log("Data type for undefined "+typeof undefined); // Output will be Undefined
//Null is a object but undefined is itself av datatype

class Saumya {

}
console.log("Data type for a class "+typeof Saumya); // Output => function

let arrayFruits=[]; // Output => object
console.log("Data type for an array "+typeof arrayFruits)

"use strict"; //treat all JS code as newer version
// alert(3+3) -> It will throw error because we are using nodejs, not browser
