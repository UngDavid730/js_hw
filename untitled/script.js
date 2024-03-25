// 6 animals and we click them.
// PLace a bet
// Roll Dice
// Check if you won
// win = moeny
// lose = no money

let choice;

let rooster = document.getElementById("rooster");
let deer = document.getElementById("deer");
let gourd = document.getElementById("gourd");
let fish = document.getElementById("fish");
let crab = document.getElementById("crab");
let shrimp = document.getElementById("shrimp");
let animalArray = ["rooster","deer","gourd","fish","crab","shrimp"];
let diceArray =[null,null,null];
function roll(){
    for(let i = 0;i<diceArray.length;i++){
        diceArray[0] = animalArray[Math.random() * animalArray.length]
    }
}

rooster.addEventListener("click",  (event) => {
    choice = "rooster"
})
deer.addEventListener("click",  (event) => {
    choice = "deer"
})
gourd.addEventListener("click",  (event) => {
    choice = "gourd"
})
fish.addEventListener("click",  (event) => {
    choice = "fish"
})
crab.addEventListener("click",  (event) => {
    choice = "crab"
})
shrimp.addEventListener("click",  (event) => {
    choice = "shrimp"
})
