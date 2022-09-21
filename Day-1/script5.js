// Arrays in JS

let player1= "Haaland";
let player2= "Lewandowski";
let player3= "Neymar";
let goals= 11;

let players= [player1, player2, player3, goals];
console.log(players);
players.push("Messi");
console.log(players);
const playerPopped= players.pop();
console.log(playerPopped);
console.log(players);
players.shift();
console.log(players);
players.unshift("Werner");
console.log(players);