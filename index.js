

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
            return "You win, paper beaxts rock"
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
    playerSelection = prompt("Hey, let's try beating PC at Rock, paper, scissors! Choose one.");
    playerSelection = playerSelection.toLowerCase();
    let result = playRound(playerSelection, getComputerChoice());
    console.log(result);
    
    playerSelection = prompt("Hey, let's try beating PC at Rock, paper, scissors! Choose one.");
    playerSelection = playerSelection.toLowerCase();
    result = playRound(playerSelection, getComputerChoice());
    console.log(result);

    playerSelection = prompt("Hey, let's try beating PC at Rock, paper, scissors! Choose one.");
    playerSelection = playerSelection.toLowerCase();
    result = playRound(playerSelection, getComputerChoice());
    console.log(result);

    playerSelection = prompt("Hey, let's try beating PC at Rock, paper, scissors! Choose one.");
    playerSelection = playerSelection.toLowerCase();
    result = playRound(playerSelection, getComputerChoice());
    console.log(result);
}

console.log(game());
