

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1){
        return "rock"
    } else if 
        (randomNumber === 2){
        return "paper"
    } else {
        return "scissors"
    } 
}
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Draw";
    } else if
        (playerSelection === "rock" && computerSelection === "paper"){
            return "You lose, paper beats rock"
    } else if 
        (playerSelection === "rock" && computerSelection === "scissors"){
            return "You win, rock beats scissors"
    } else if
        (playerSelection === "paper" && computerSelection === "rock"){
            return "You win, paper beats rock"
    }   else if
        (playerSelection === "paper" && computerSelection === "scissors"){
            return "You lose, scissors beat paper"
    }   else if 
        (playerSelection === "scissors" && computerSelection === "rock"){
            return "You lose, rock beats scissors"
        }   else if 
        (playerSelection === "scissors" && computerSelection === "paper"){
            return "You win, scissors beat paper"
    }   else {
        return "Error"
    }
 }

function game (){
    let result;
    let w = 0;
    let l = 0;
    while (w < 5 && l < 5) {
    playerSelection = prompt("Hey, let's try beating PC at Rock, paper, scissors! Choose one.");
    playerSelection = playerSelection.toLowerCase();
    result = playRound(playerSelection, getComputerChoice());
    console.log(result);
    if (result.indexOf('win') > -1){
        w++;
        console.log("Player: " + w);
        console.log("Computer: " + l);
    } else if
        (result.indexOf("lose") > -1){
        l++;
        console.log("Player: " + w);
        console.log("Computer: " + l);
    }
    }
    if (w > l) {
        console.log("Congratulations! You have won the game!")
    } else {
        console.log("Sorry, maybe next time...")
    }
}

console.log(game());


/*function loop (hodnota){
let i = parseInt(hodnota);
while (i < 10000){
    console.log("Ahoj");
    i++;
}}

console.log(loop(0));*/