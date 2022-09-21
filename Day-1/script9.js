// Events and Event listeners in JS

const btn= document.getElementById("btn-1");
btn.addEventListener("click",()=>{
    console.log("You have clicked me");
});

btn.onclick= function(){
    console.log("You have clickd me");
}