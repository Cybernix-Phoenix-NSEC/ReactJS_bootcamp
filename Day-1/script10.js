// Synchronous vs Asynchronous

//synchronous

// console.log("Code start");
// for(let i=1;i<=10000;i++);
// console.log("code end");

//asynchronous

console.log("Code start");
function myFunc(){
    console.log("hello world");
}
setInterval(myFunc, 2000);
console.log("code end");