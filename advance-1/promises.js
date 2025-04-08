// A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.

// var Promise: PromiseConstructor
// new <any>(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void) => Promise<any>

const promiseOne = new Promise(function(resolve, reject){
    //Async task
    // DB Calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
})

//If we don't write resolve in the promise then we had never connected resolve and then
//So if we don't call resolve in the function Promise consumed will never be displayed

promiseOne.then(function(){   //.then This has direct connection with resolve
   console.log("Promise consumed");
})

//Promise without creating a variable

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    })
}).then(function(){
    console.log("Async 2 resolevd");
})

// Output
// Async task 2
// Async 2 resolevd

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Saumya", email:"saumya0231@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
  console.log(user);
})

// { username: 'Saumya', email: 'saumya0231@gmail.com' }

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false
        if(!error){
            resolve({username: "Saumya", password:"saumya123"})
        } else{
            reject('Error: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
   console.log(user);
   return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
   console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))
//Saumya

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username: "Saumya", password:"saumya123"})
        } else{
            reject('Error: JS Went wrong')
        }
    },1000)
})

//Another way of handling .then when handling using async there is no catch block
//It only results when it's resolved 

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }

//When error is true and not handled using try and catch and there's a error then it will show this

//The promise is either resolved or rejected
// node:internal/process/promises:289
// triggerUncaughtException(err, true /* fromPromise */);
// ^

// [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Error: JS Went wrong".] {
// code: 'ERR_UNHANDLED_REJECTION'
// }

// Now if I want to handle the above async scenario I should use try and catch with it

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error){
        console.log(error);
    }  
}

consumePromiseFive()

//Now it will show the correct output.
// Error: JS Went wrong

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        // const data = await response.json()
        console.log(response);
    } catch(error){
      console.log('E:',error);
    }
}

getAllUsers();