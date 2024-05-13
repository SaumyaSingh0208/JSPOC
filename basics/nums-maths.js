const score = 400;
console.log(score); //400

const balance = new Number(100);
console.log(balance); //[Number: 100]

console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00

const num= 123.8966
console.log(num.toPrecision(3)); //124

const hundreds = 1000000000;
console.log(hundreds.toLocaleString()); //1,000,000,000
//Makes it readable but is in US standard so comma is placed after 3 digits

console.log(hundreds.toLocaleString('en-IN'));  //1,00,00,00,000
//To convert it according to Indian standards

//********************************* Maths *********************/
console.log(Math); //Object [Math] {}
console.log(Math.abs(-4)); //4 => converts negative number to positive
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.6)); //5
console.log(Math.floor(4.6)); //4

console.log(Math.random()); //Always gives values betweem 0 and 1
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10))+1); //Always value is above 10
//Suppose value is 0.1 so value returned by floor will be 0 so 1 is added to make it between 1 and 9


const min =10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min) //Output is always above 10

