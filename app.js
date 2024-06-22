const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let humanChoiceIndex = parseInt(prompt("Enter Your Choice: 0 for rock, 1 for paper, 2 for scissors"));
    return choices[humanChoiceIndex];
}

function play() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    
    console.log("Computer choice:", computerChoice);
    console.log("Human choice:", humanChoice);

    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    } else if (
        (computerChoice === "rock" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "rock")
    ) {
        console.log("Player won!");
    } else {
        console.log("Computer won!");
    }
}

play();
