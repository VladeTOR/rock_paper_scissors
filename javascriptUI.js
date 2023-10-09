let playerWins = document.createElement('div');
let computerWins = document.createElement('div');





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
    const playerChoice = prompt("Choose one: Paper, Rock or Scissors").toLowerCase();// for console play

        if ((playerChoice === "paper") || (playerChoice === "rock") || (playerChoice === "scissors")){
            return playerChoice
        }
        else {
            alert("You should choose rock, paper or scissors!")
            return playerSelection()
        }}
    


function playRound(playerSelection, computerSelection){
    if(((playerSelection === "rock") && (computerSelection === "scissors")) || ((playerSelection === "paper") && (computerSelection === "rock")) || ((playerSelection === "scissors") && (computerSelection === "paper"))){
        return ("Player win! Good game")   
    }
    else if(playerSelection === computerSelection){
        return ("It's tie")
    }
    else {
        return ("Computer won, more luck next time!") 
    }
}

function game(){
    playRound(playerSelection(), getComputerChoice())
    playRound(playerSelection(), getComputerChoice())
    playRound(playerSelection(), getComputerChoice())
    playRound(playerSelection(), getComputerChoice())
    playRound(playerSelection(), getComputerChoice())
}

game()