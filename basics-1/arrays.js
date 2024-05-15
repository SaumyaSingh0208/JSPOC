// Array

const myArray =[0,1,2,3,4]
const myCourses = ["JS", "HTML", "CSS"]

const myArr = new Array(1,2,3,4)
//-> JS arrays are resizable and can contain mix of different data types.
//-> JS arrays are not associative arrays so they can't be accessed using arbitrary strings as index like myArray["one"]
//-> JS arrays are zero-indexed
//-> JS array-copy-operations create shallow copies(shallow copy of an object is a copy whose properties share the same refrences.)

myArr.push(5);
// console.log(myArr);  //[ 1, 2, 3, 4, 5 ]

myArr.push(6);
// console.log(myArr);  //[ 1, 2, 3, 4, 5, 6 ]

myArr.pop();
console.log(myArr); //[ 1, 2, 3, 4, 5 ]

myArr.unshift(9);
console.log(myArr); //[ 9, 1, 2, 3, 4, 5 ]=> Adds values at the starting

myArr.shift();
console.log(myArr); //[ 1, 2, 3, 4, 5 ]=> Removes values at the starting

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9)); // -1 => The values which are not in the array -1 will be returned which shows that the given value is not present
console.log(myArr.indexOf(3)); // 2

const elements = ['Fire', 'Air', 'Water'];
//The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

console.log(typeof elements) //object

const newElements = elements.join();
console.log(typeof newElements) //string

// slice, splice
console.log("A ", myArr); // A  [ 1, 2, 3, 4 ]
const arr1 = myArr.slice(1,3) //=> Returns a section of value and Does not include last index value

console.log(arr1);  //[ 2, 3 ]
console.log("B ", myArr); //B  [ 1, 2, 3, 4 ]

const arr2 = myArr.splice(1,3) //=> Returns a section of value and includes last index value 
//The main difference is that in case of slice the original array is not manipulated.
//But in case of splice the original array is manipulated and also the selction which was included in splice is removed from the original array
console.log(arr2);  // 2, 3, 4 ]
console.log("C" ,myArr); // C [ 1 ]




