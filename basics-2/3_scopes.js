let a=10;
const b=20;
var c=30;

console.log(a); //10
console.log(b); //20
console.log(c); //30

if(true){
    let d=10;
    const e=20;
    var f=30;
}

// console.log(d); //ReferenceError: d is not defined
// console.log(e); //ReferenceError: e is not defined
console.log(f); //30
//Which is wrong the f should be able to access it value outside it's scope.

//Nested Scope
function one(){
    const username="Saumya"

    function two(){
        const course ="JS"
        console.log(username); //Saumya
    }

    // console.log(course);  //ReferenceError: course is not defined
    two();
}
one();

console.log(addOne(5)); //6
function addOne(num){
    return num+1;
}

// console.log(addTwo(num)); //ReferenceError: num is not defined
const addTwo = function(num){
    return num+2;
}