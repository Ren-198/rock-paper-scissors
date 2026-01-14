
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function playGame(){

    const container = document.querySelector("#container");

    const scoreCont = document.querySelector("#scoreRow");

    let hScore = document.querySelector("#hScore");

    let cScore = document.querySelector("#cScore");

    let result = document.querySelector("#result");

    let rock = document.createElement("button");
    rock.setAttribute("id", "rock");
    rock.textContent = "Rock";

    let paper = document.createElement("button");
    paper.setAttribute("id", "paper");
    paper.textContent = "Paper";

    let scissor = document.createElement("button");
    scissor.setAttribute('id', 'scissor');
    scissor.textContent = "Scissor";
        

    container.appendChild(rock);
    container.appendChild(paper);
    container.appendChild(scissor);

    let playerSelection;

    let humanScore = 0;
    hScore.textContent = `Your Score: ${humanScore}`;

    let computerScore = 0;
    cScore.textContent = `Computer Score: ${computerScore}`;

    let gameOver = false;
    
    container.addEventListener('click', (event) => {

        if (gameOver) return;

        let target = event.target;

        if (!target.matches("button")) return;

        


        switch(target.id) {
                case 'rock':
                    playerSelection = "Rock";
                    break;

                case 'paper':
                    playerSelection = "Paper";
                    break;

                case 'scissor':
                    playerSelection = "Scissors";
                    break;

            }

        playRound(playerSelection, getComputerChoice());

        })

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            result.textContent = "It's a tie! Nobody wins this round.";
        }
        else {
            if ((humanChoice === "Rock" && computerChoice === "Scissors" ||
                humanChoice === "Paper" && computerChoice === "Rock" ||
                humanChoice === "Scissors" && computerChoice === "Paper")){
                    humanScore++;
                    hScore.textContent = `Your Score: ${humanScore}`;
                    result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
                }
            else {
                computerScore++;
                cScore.textContent = `Computer Score: ${computerScore}`;
                result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            }
            
        }

        if (humanScore === 5 || computerScore === 5) {
            gameOver = true;

            if (humanScore === 5) {
                result.textContent = "You won the game!";
            } else {
                result.textContent = "The Computer won the game.";
            }
        }
    }

}

playGame();


