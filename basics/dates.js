// //Dates

// let myDate = new Date();
// console.log(typeof myDate); // Object
// console.log(myDate);  //2024-05-13T19:52:30.482Z
// console.log(myDate.toString()); // Tue May 14 2024 01:23:48 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Tue May 14 2024
// console.log(myDate.toISOString());  // 2024-05-13T19:55:44.530Z
// console.log(myDate.toLocaleString());  // 5/14/2024, 1:27:27 AM
// console.log(myDate.toLocaleDateString()); // 5/14/2024
// console.log(myDate.toLocaleTimeString()); // 1:28:23 AM

// let myCretedDateFormat = new Date("2024-00-14"); //Invalid Date
// console.log(myCretedDateFormat);

// let myCretedDateFormat1 = new Date("2024-01-14"); //1/14/2024, 5:30:00 AM
// console.log(myCretedDateFormat1.toLocaleString());

// let myCretedDateFormat2 = new Date("01-14-2023"); //1/14/2023, 12:00:00 AM
// console.log(myCretedDateFormat2.toLocaleString());

// let myCretedDate = new Date(2024, 0, 14);
// console.log(myCretedDate.toDateString()); //Fri Jan 14 2024 => Moth starts from index 0

// let myCretedDate1 = new Date(2024, 5, 14 , 5, 3);
// console.log(myCretedDate1.toLocaleString()); //6/14/2024, 5:03:00 AM

//*************************** TimeStamp ********************************/
let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1715631117798 => time in milliseconds
console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date();
console.log(newDate.getDay());  //2
console.log(newDate.getDate()); //14
console.log(newDate.getFullYear());  //2024
console.log(newDate.getHours()); //1
console.log(newDate.getMonth());  //4
console.log(newDate.getSeconds());  //36
console.log(newDate.getTime());  //1715631396410

console.log(newDate.toLocaleString('default',{
    weekday: 'long',
    month: 'narrow'
}));  // Tuesday (month: M)

console.log(newDate.toLocaleString('default',{
    weekday: 'long',
    month: 'long'
}));  // May Tuesday

