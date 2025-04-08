function addTwoNumbers(num1, num2){
  console.log(num1+num2);
}

addTwoNumbers(); //Nan
const result = addTwoNumbers(3,4); //7

console.log("Result: ", result); //Result:  undefined

function sum(num1, num2){
  return num1+num2
}

result1= sum(6,7);
console.log("Result1: ", result1); //Result1:  13

function loginUserMessage(userName){
  return `Hey ${userName} you have successfully logged in` 
}

console.log(loginUserMessage("Saumya")); //Hey Saumya you have successfully logged in
//Here the values are returned so we can store it but without using console it won't get printed

console.log(loginUserMessage()); //Hey undefined you have successfully logged in

//In case no parameter is passed it will use undefined so to get away wit this we check this condition
function loginUserMessage(userName){
  if(userName===undefined){
    console.log("Please enter a username");
    return;
  }
  // or 
  // if(!userName){
  //   console.log("Please enter a username");
  //   return;
  // }
    return `Hey ${userName} you have successfully logged in` 
}

console.log(loginUserMessage("Swati")); //Hey Swati you have successfully logged in
console.log(loginUserMessage()); //Please enter a username