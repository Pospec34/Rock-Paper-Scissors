playerChoice = prompt("Hej");
playerChoice = parseInt(playerChoice);
console.log(playerChoice);


function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
    return randomNumber;
    /*if (randomNumber === 1){
        return "Rock"
    }
    else if (randomNumber === 2)
    {
        return "Paper"
    } else
        return "Scissors"*/
}

function singleRound(playerSelection, aiSelection){
    if (playerSelection === aiSelection){
        return "Draw";
    } else if
        (playerSelection === 1 && aiSelection === 2){
            return "You lose, paper beats rock"
    } else if 
        (playerSelection === 1 && aiSelection === 3){
            return "You win, rock beats scissors"
    } else if
        (playerSelection === 2 && aiSelection === 1){
            return "You win, paper beats rock"
    }   else if
        (playerSelection === 2 && aiSelection === 3){
            return "You lose, scissors beat paper"
    }   else if 
        (playerSelection === 3 && aiSelection === 1) {
            return "You lose, rock beats scissors"
    }   else {
        return "You win, scissors beat paper"
    }
 }


console.log(singleRound(playerChoice, getComputerChoice()))