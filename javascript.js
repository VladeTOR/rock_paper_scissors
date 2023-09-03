function getComputerChoice(){
    const choice = Math.floor(Math.random() * 100);
    if (choice < 33){
        return "rock"
    } 
    else if (choice < 66){
        return "paper"
    }
    else {
        return "scissors"
    }

}

function playerSelection(){
    const playerChoice = prompt("Choose one: Paper, Rock or Scissors").toLowerCase();
    if ((playerChoice === "paper") || (playerChoice === "rock") || (playerChoice === "scissors")){
        return playerChoice
    }
    else {
        alert("You should choose rock, paper or scissors!")
        return playerSelection()
    }
}

function playRound(playerSelection, computerSelection){
    if(((playerSelection === "rock") && (computerSelection === "scissors")) || ((playerSelection === "paper") && (computerSelection === "rock")) || ((playerSelection === "scissors") && (computerSelection === "paper"))){
        console.log("Player win! Good game")
        console.log(playerSelection, computerSelection)
    }
    else if(playerSelection === computerSelection){
        console.log("It's tie")
        console.log(playerSelection, computerSelection)
    }
    else {
        console.log("Computer won, more luck next time!")
        console.log(playerSelection, computerSelection)
    }
}

function game(){
    playRound(getComputerChoice(), playerSelection())
    playRound(getComputerChoice(), playerSelection())
    playRound(getComputerChoice(), playerSelection())
    playRound(getComputerChoice(), playerSelection())
    playRound(getComputerChoice(), playerSelection())
}

