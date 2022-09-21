// Promises in JS
const bucket= ["salt", "chips", "chocolates", "vegetables", "rice"];

//production of a promise

const myPromise= new Promise((resolve, reject)=>{
    if(bucket.includes("salt") && bucket.includes("vegetables") && bucket.includes("rice")){
        resolve("Fried rice");
    }
    else{
        reject("Something is missing and we cannot make it");
    }
});

// consumption of a promise

myPromise.then((promise1)=>{
    console.log("We can make", promise1);
}).catch((error)=>{
    console.log(error);
    console.log("OOPS!");
});