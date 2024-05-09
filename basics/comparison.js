console.log("2">1); //Output => true
console.log("02">1); //Output => true

console.log(null>0); //Output => false
console.log(null==0); //Output => false
console.log(null>=0); //Output => true

// The reason is that an equality check == and comparisons > < >= <= works differently
// Comparison convert null to a number, treating it as 0.
// That's why (3) null >=0 and (1)/ null>0 is fasle.

console.log(undefined>0); //Output => false
console.log(undefined==0); //Output => false
console.log(undefined>=0); //Output => false

// === -> strict check -> Checks values strictly i.e. checks data types as well.
