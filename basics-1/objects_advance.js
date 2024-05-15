// const udemyUser = new Object(); //=> -> Singleton object
// // console.log(udemyUser); //{}

// udemyUser.name="Saumya"
// udemyUser.email="saumya0231@gmail.com"
// udemyUser.age =24

// console.log(udemyUser); //{ name: 'Saumya', email: 'saumya0231@gmail.com', age: 24 }

// const regularUser ={
//     email :"user1@gmail.com",
//     fullName: {
//         userFullName: {
//             firstName: "Saumya",
//             lastName: "Singh",
//         }
//     }
// }

// console.log(regularUser.fullName); // { userFullName: { firstName: 'Saumya', lastName: 'Singh' } }
// console.log(regularUser.fullName.userFullName); // { firstName: 'Saumya', lastName: 'Singh' }
// console.log(regularUser.fullName.userFullName.firstName); // Saumya

// //console.log(regularUser.fullName?.userFullName.firstName); if fullname exists then execute this lese do other once

// //Combine objects
// const object1={1: "a", 2: "b"}
// const object2={3: "a", 4: "b"}
// const object3 ={...object1, ...object2}
// console.log(object3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// //another way of combining
//  const object4 = Object.assign({}, object1, object2) //First parameter '{}' is optional
// //The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
// console.log(object4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// //Another example
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// // Expected output: true

// const obj1 = { a: 0, b: { c: 0 } };
// const obj2 = Object.assign({}, obj1);
// console.log(obj2); // { a: 0, b: { c: 0 } }

// obj1.a = 1;
// console.log(obj1); // { a: 1, b: { c: 0 } }
// console.log(obj2); // { a: 0, b: { c: 0 } }

// obj2.a = 2;
// console.log(obj1); // { a: 1, b: { c: 0 } }
// console.log(obj2); // { a: 2, b: { c: 0 } }

// obj2.b.c = 3;
// console.log(obj1); // { a: 1, b: { c: 3 } }
// console.log(obj2); // { a: 2, b: { c: 3 } }

// // Deep Clone
// const obj3 = { a: 0, b: { c: 0 } };
// const obj4 = structuredClone(obj3);
// obj3.a = 4;
// obj3.b.c = 4;
// console.log(obj4); // { a: 0, b: { c: 0 } }
// console.log(obj3); // { a: 4, b: { c: 4 } }
// console.log(udemyUser); //{ name: 'Saumya', email: 'saumya0231@gmail.com', age: 24 }
// console.log(Object.keys(udemyUser)); //[ 'name', 'email', 'age' ]
// console.log(Object.values(udemyUser)); //[ 'Saumya', 'saumya0231@gmail.com', 24 ]
// console.log(Object.entries(udemyUser));
// // [
// //     [ 'name', 'Saumya' ],
// //     [ 'email', 'saumya0231@gmail.com' ],
// //     [ 'age', 24 ]
// //  ]

// console.log(udemyUser.hasOwnProperty('age')); //true
// //hasOwnProperty -> Determines whether an object has a property with the specified name.

//Destructuring
const course ={
    courseName: "JS",
    price: "4999",
    courseInstructor: "Saumya"
}

//course.courseInstructor

//In place of every time accessing it using dot notation 
//we can use the below way to access the same both works the same way

const {courseInstructor:Instructor} =course
//or const {courseInstructor} =course
console.log(Instructor); //Saumya
