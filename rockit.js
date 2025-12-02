
let humanScore;
let computerScore;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getHumanChoice() {
    let input = prompt("rock, paper, or scissors?");
    return input;
}


