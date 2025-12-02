

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getHumanChoice() {
    let input = prompt("Rock, Paper, or Scissors?");
    return input;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    

    if (humanChoice === computerChoice) {
        return "It's a tie! Nobody wins this round.";
    }
    else {
        if ((humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper")){
                humanScore++;
                return `You win! ${humanChoice} beats ${computerChoice}.`;
            }
        else {
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
        
    }

}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
        

        if (humanChoice === computerChoice) {
            return "It's a tie! Nobody wins this round.";
        }
        else {
            if ((humanChoice === "Rock" && computerChoice === "Scissors" ||
                humanChoice === "Paper" && computerChoice === "Rock" ||
                humanChoice === "Scissors" && computerChoice === "Paper")){
                    humanScore++;
                    return `You win! ${humanChoice} beats ${computerChoice}.`;
                }
            else {
                computerScore++;
                return `You lose! ${computerChoice} beats ${humanChoice}`;
            }
            
        }
    }

    for (let i = 1; i <= 5; i++){
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
}

playGame();


