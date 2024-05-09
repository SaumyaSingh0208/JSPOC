let score = "33";
console.log("Datatype for score is "+typeof(score)); //Datatype for score is string

let valueInNumber=Number(score);
console.log("Datatype for valueInNumber is  "+typeof(valueInNumber));  //Datatype for valueInNumber is  number

let scoreNotNumber = "33abc";
console.log("Datatype for scoreNotNumber is "+typeof(scoreNotNumber)); //Datatype for scoreNotNumber is string

let valueInNumberNotNumber=Number(scoreNotNumber);
console.log("Datatype for valueInNumberNotNumber is  "+typeof(valueInNumberNotNumber));  //Datatype for valueInNumberNotNumber is  number
console.log("Value of valueInNumberNotNumber "+valueInNumberNotNumber)  //Value of valueInNumberNotNumber NaN

// "33" => 33
// "33abc" => Nan
// true =>1
// false =>0

let isAbleToVote =1

let booleanIsAbleToVote =Boolean(isAbleToVote);
console.log(booleanIsAbleToVote)  // Output => true

// 1=> true
// 0=> false
// "" => false
// "Saumya" => true

let num = 33
let stringNum = String(num)
console.log(typeof(num)); //Output => number
console.log(typeof(stringNum)); //Output => string

// ******************* Operations ****************** //

let str1 ="Hello "
let str2 ="Saumya"
let str3 = str1+str2
console.log(str3); // Output => Hello Saumya
console.log("1"+2); // Output =>12
console.log(1+"2"); // Output =>12
console.log("1"+"2"); // Output =>12
console.log("1"+2+2); // Output =>122
console.log(1+2+"2"); // Output =>32
console.log(1+2*3/6%5); // Output =>2
