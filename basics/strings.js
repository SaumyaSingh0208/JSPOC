// Strings can be created as primitives, from string literals, or as objects, using the String() constructor:
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

const string4 = new String("A String object");
console.log(typeof(string1)); //Output => string
console.log(typeof(string2)); //Output => string
console.log(typeof(string3)); //Output => string
console.log(typeof(string4)); //Output => object

// Character access
// There are two ways to access an individual character in a string. The first is the charAt() method:
"cat".charAt(1); // gives value "a"

//The other way is to treat the string as an array-like object, where individual characters correspond to a numerical index:
"cat"[1]; // gives value "a"



const name ="Saumya"
const projectCount =70

console.log(`Hello my name is ${name} and my project count is ${projectCount}`)
//This is called string interpolation and writte in backticks(``)

const getCourse = new String('ReactJS')
// Another way of declaring string which provide methods of string
// console.log(getCourse.__proto__); // To see methods
// console.log(getCourse.length);
// console.log(getCourse.toUpperCase());
// console.log(getCourse.indexOf('t'));

// //To divide in substring
// const newString= getCourse.substring(0,4); // Last value does not get included -> Output - Reac
// console.log(newString);

// const anotherString = getCourse.slice(-6,4); //Output => eac
// console.log(anotherString);

// const anotherStringOne = getCourse.slice(-6,4); //Output => ea
// console.log(anotherStringOne);

// const anotherStringTwo = getCourse.slice(-7,4); //Output => Reac
// console.log(anotherStringTwo);

// const anotherStringThree = getCourse.slice(-5,4); //Output => ac
// console.log(anotherStringThree);

const stringWithSpace ="  Saumya "
console.log(stringWithSpace);  //Output =>   Saumya 
//To remove white space we use function trim()
console.log(stringWithSpace.trim()); // Output =>Saumya

const url ="https://saumya0208.com/saumya%20singh"
console.log(url.replace('%20',' '));  //Output=> https://saumya0208.com/saumyasingh
console.log(url.includes('saumya'));  //Output=>true
