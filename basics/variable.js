const accountId=123
let accountEmail="saumya0231@gmail.com"
var accountPassword="saumya"  //We don't use var because of issue in block scope and functional scope.
//Var can be declared and accessed globally. Let can be declared globally, but its access is limited to the block in which it is declared.

accountCity="Noida"

// accountId=45
// On reinilaization accountId it will throw error and will not allow to do SourceBuffer        ^
// TypeError: Assignment to constant variable.

//Now I want to display all variables in a table using a single console

console.table([accountId, accountEmail, accountPassword, accountCity])
// It will give the output as below 
// ┌─────────┬────────────────────────┐
// │ (index) │ Values                 │
// ├─────────┼────────────────────────┤
// │ 0       │ 123                    │
// │ 1       │ 'saumya0231@gmail.com' │
// │ 2       │ 'saumya'               │
// │ 3       │ 'Noida'                │
// └─────────┴────────────────────────┘

console.log(typeof(accountCity));  //It will return string

let accountState;
console.log(accountState);
//It will show undefined, In js when we declare a variable but don't assign a value in this case it is assigned undefined