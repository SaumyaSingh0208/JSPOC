// Stack (Primitive), Heap (Non Primitive)

let myCourse="Javascript"

let anotherCourse = myCourse

anotherCourse="React"

console.log(myCourse);  // Output => Javascript
console.log(anotherCourse);  // Output => React

//This is becuase a copy of value is given

let myDetail1 ={
    email: "saumya0231@gmail.com",
    upi: "saumya@ybl"
}

let myDetail2 =myDetail1

myDetail2.email ="saumyasingh0208@gmail.com"

console.log(myDetail1.email);  // Output => saumyasingh0208@gmail.com
console.log(myDetail2.email);  // Output => saumyasingh0208@gmail.com

// This is because refrence of value is given
