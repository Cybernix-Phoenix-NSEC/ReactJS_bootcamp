// For in, For of

let player1= "Haaland";
let player2= "Lewandowski";
let player3= "Neymar";

let players= [player1, player2, player3];

// for(let i=0;i<3;i++){
//     console.log(players[i]);
// }

// for in

// for(player in players){
//     console.log(players[player]);
// }

// for of

for(player of players){
    console.log(player);
}