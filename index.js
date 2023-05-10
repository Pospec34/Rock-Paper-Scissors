function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    const rock = 1;
    const paper = 2;
    const scissors = 3;
    console.log(randomNumber);
    if (randomNumber === 1){
        return "Rock"
    }
    else if (randomNumber === 2)
    {
        return "Paper"
    } else
        return "Scissors"
}

console.log(getComputerChoice());