playerChoice = prompt("Hey, let's try beating PC at Rock, paper, scissors! Choose one.");
playerChoice = playerChoice.toLowerCase();

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
    /*if (randomNumber === 1){
        return "Rock"
    }
    else if (randomNumber === 2)
    {
        return "Paper"
    } else
        return "Scissors"*/
}

function playRound(playerSelection, aiSelection){
    if (playerSelection === aiSelection){
        return "Draw";
    } else if
        (playerSelection === "rock" && aiSelection === "paper"){
            return "You lose, paper beats rock"
    } else if 
        (playerSelection === "rock" && aiSelection === "scissors"){
            return "You win, rock beats scissors"
    } else if
        (playerSelection === "paper" && aiSelection === "rock"){
            return "You win, paper beats rock"
    }   else if
        (playerSelection === "paper" && aiSelection === "scissors"){
            return "You lose, scissors beat paper"
    }   else if 
        (playerSelection === "scissors" && aiSelection === "rock"){
            return "You lose, rock beats scissors"
        }   else if 
        (playerSelection === "scissors" && aiSelection === "paper"){
            return "You win, scissors beat paper"
    }   else {
        return "chyba"
    }
 }
 const computerSelection = getComputerChoice();

console.log(playRound(playerChoice, computerSelection))


console.log(computerSelection);