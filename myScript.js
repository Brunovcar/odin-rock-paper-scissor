function playGame() {

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function getComputerCHoice() {
    let computerRandom = Math.random();
    let computerHand;
    if(computerRandom >= 0 && computerRandom < 0.33333) {
        computerHand = "rock";
    } 
    else if (computerRandom >= 0.33333 && computerRandom < 0.66666) {
        computerHand = "paper";
    }
    else if (computerRandom >= 0.66666 && computerRandom < 1) {
        computerHand = "scissor";
    }
    return computerHand;
}

function getHumanChoice() {
    let humanHand = prompt("Make your choice");
    humanHand = humanHand.toLowerCase();
    if(humanHand !== "rock" && humanHand !== "paper" && humanHand !== "scissor" ) {
        console.log("Wrong input");
    }
    return humanHand;
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("Draw");
            }
            else if (computerChoice === "paper") {
                console.log("Computer won the round!")
                ++computerScore;
            }
            else if (computerChoice === "scissor") {
                console.log("Human won the round!")
                ++humanScore;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                console.log("Human won the round!");
                ++humanScore;
            }
            else if (computerChoice === "paper") {
                console.log("Draw");
            }
            else if (computerChoice === "scissor") {
                console.log("Computer won the round!")
                ++computerScore;
            }
            break;
        case "scissor":
            if (computerChoice === "rock") {
                console.log("Computer won the round!")
                ++computerScore;
            }
            else if (computerChoice === "paper") {
                console.log("Human won the round!")
                ++humanScore;
            }
            else if (computerChoice === "scissor") {
                console.log("Draw");
            }
            break;
    }
    return 0;
}

while (rounds < 5){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerCHoice();
    playRound(humanSelection, computerSelection);
    if (rounds == 4 && humanScore > computerScore) {
        console.log("The human won the game!")
    } 
    else if(rounds == 4 && humanScore < computerScore) {
        console.log("The computer won the game!")
    }
    else if(rounds == 4 && humanScore == computerScore) {
        console.log("The game ended in a draw!")
    }
    ++rounds;
    }

rounds = 0;

return 0;

}

playGame();