const courses =["JS", "React JS", "HTML", "CSS"]
const channel=["Udemy", "Coursera", "W3School", "GFG"]

courses.push(channel);
console.log(courses); //=> Returns array inside arrays hence not a good practise
// [
//     'JS',
//     'React JS',
//     'HTML',
//     'CSS',
//     [ 'Udemy', 'Coursera', 'W3School', 'GFG' ]
// ]

const newCourse = courses.concat(channel);
console.log(newCourse);
// [
//     'JS',       'React JS',
//     'HTML',     'CSS',
//     'Udemy',    'Coursera',
//     'W3School', 'GFG'
// ]

const allCourses = [...courses, ...channel]
console.log(allCourses); //Spread Operator

// [
//     'JS',       'React JS',
//     'HTML',     'CSS',
//     'Udemy',    'Coursera',
//     'W3School', 'GFG'
//   ]

const anotherArray =[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

let usableArray = anotherArray.flat() 
//Returns a new array with all sub-arrays elements concatenated into it recursively up to the specified depth.
console.log(usableArray); //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]

let usableArray1 = anotherArray.flat(Infinity) //In parameter we pass number which shows upto which depth it needs to be solved
console.log(usableArray1); 
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

console.log(Array.isArray("Saumya"));  //False
console.log(Array.from("Saumya")); // Converts it into array
//[ 'S', 'a', 'u', 'm', 'y', 'a' ]

console.log(Array.from({name: "Saumya"})); //Output=> []
let score =100;
let score1 =200;
let score2 =300;
let score3 =400;

console.log(Array.of(score, score1, score2, score3)); //[ 100, 200, 300, 400 ]
//Returns a new array from a set of elements.

