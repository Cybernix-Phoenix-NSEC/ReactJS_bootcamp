// Fetch API and async/await in JS
const apiLink= "https://jsonplaceholder.typicode.com/posts";

const fetchedData= fetch(apiLink);
// console.log(fetchedData);

// fetchedData.then(data =>{
//     return data.json();
// }).then(response=>{
//     console.log(response);
// }).catch();

async function myFunc(){
    const response= await fetchedData;
    const anotherResponse= await response.json();
    console.log(anotherResponse);
}
myFunc();
