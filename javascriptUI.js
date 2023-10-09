let gameAction = document.createElement('div');
let results = document.createElement('div');
let rounds = document.createElement('div');
let result = document.createElement('div');
let winner = document.createElement('div');
let game = document.querySelector('.game')

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors')
const choices = [rock, paper, scissors];

let playerWins = 0;
let computerWins = 0;
let draw = 0;
let round = 0;

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

function gameWinner(){
    if(playerWins === 5){
        return ('Player won the game!')
    } else if (computerWins === 5){
        return ('Player lost the game!')
    }
    return ('')
}

function gameResult(){
    if(results.innerHTML.includes('win')){
        playerWins ++
    }else if (results.innerText.includes('won')){
        computerWins ++
    }else{
        draw ++;
    }
    return `Round ${round + 1} \n ** Your score: ${playerWins} | Computer score: ${computerWins} | Draw: ${draw}**`;
}

rounds.innerText = `It's ${round + 1 } round`;
    


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

choices.forEach(button => {
    button.addEventListener('click', (e) => {
        if(playerWins === 5 || computerWins === 5){
            gameAction.innerText = '';
            results.innerText = '';
            rounds.innerText = '';
            result.innerText = '';
        }else {
            let computerSelection = getComputerChoice();
            rounds.innerText = '';
            gameAction.innerText = `You selected ${button.id}, the computer selected ${computerSelection}.`
            results.innerText = playRound(button.id, computerSelection);
            result.innerText = gameResult();
            round ++
            winner.innerText = gameWinner();
        }
    })
});

game.appendChild(gameAction);
game.appendChild(results);
game.appendChild(result);
game.appendChild(rounds);
game.appendChild(winner);