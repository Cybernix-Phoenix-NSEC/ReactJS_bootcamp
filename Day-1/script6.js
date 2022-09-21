// Objects in JS

// const obj= {name:"Rajit", age:20};

let players=[
    {pName: "Haaland", pGoal: 11},
    {pName: "Lewandowski", pGoal: 8},
    {pName: "Neymar", pGoal: 8},
];

for(playerNumber in players){
    console.log(`${players[playerNumber]}`);
}