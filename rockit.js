





function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
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
    const container = document.querySelector("#container");

    const scoreCont = document.querySelector("#scoreRow");

    let hScore = document.querySelector("#hScore");

    let cScore = document.querySelector("#cScore");

    let rock = document.createElement("button");
    rock.setAttribute("id", "rock");

    let paper = document.createElement("button");
    paper.setAttribute("id", "paper");

    let scissor = document.createElement("button");
    scissor.setAttribute('id', 'scissor');

        

    container.appendChild(rock);
    container.appendChild(paper);
    container.appendChild(scissor);

    let playerSelection;

    let humanScore = 0;
    hScore.textContent = `Your Score: ${humanScore}`;

    let computerScore = 0;
    cScore.textContent = `Computer Score: ${computerScore}`;
    
    container.addEventListener('click', (event) => {

        let target = event.target;

            switch(target.id) {
                case 'rock':
                    playerSelection = "Rock";
                    break;

                case 'paper':
                    playerSelection = "Paper";
                    break;

                case 'scissor':
                    playerSelection = "Scissor";
                    break;

            }
            
        })

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            return "It's a tie! Nobody wins this round.";
        }
        else {
            if ((humanChoice === "Rock" && computerChoice === "Scissors" ||
                humanChoice === "Paper" && computerChoice === "Rock" ||
                humanChoice === "Scissors" && computerChoice === "Paper")){
                    humanScore++;
                    hScore.textContent = `Your Score: ${humanScore}`;
                    return `You win! ${humanChoice} beats ${computerChoice}.`;
                }
            else {
                computerScore++;
                cScore.textContent = `Computer Score: ${computerScore}`;
                return `You lose! ${computerChoice} beats ${humanChoice}`;
            }
            
        }
    }
    
    
    for (let i = 0; i <= 5; i++) {
        playRound(playerSelection, getComputerChoice());
    }


    

}

playGame();


