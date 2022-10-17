let scoreboard = {
    "computer": 0,
    "player": 0
}

const winnerDiv = document.querySelector(".winner");
const scoreDiv = document.querySelector(".score");

const buttons = document.querySelectorAll(".hand");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        roundWinner = playRound(button.id, getComputerChoice());
        addScore(scoreboard, roundWinner);
        checkWinner(scoreboard);
    })
})

function getComputerChoice() {
    const hands = ["Rock", "Paper", "Scissors"];
    
    return hands[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let winner;

    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "paper":
                    winner = "computer";
                    break;
                case "rock":
                    winner = "draw";
                    break;
                case "scissors":
                    winner = "player";
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "scissors":
                    winner = "computer";
                    break;
                    case "paper":
                        winner = "draw";
                    break;
                case "rock":
                    winner = "player";
                    break;
                }
            break;
            case "scissors":
                switch (computerSelection) {
                case "rock":
                    winner = "computer";
                    break;
                case "scissors":
                    winner = "draw";
                    break;
                case "paper":
                    winner = "player";
                    break;
            }
            break;
        }
        
    return winner;
}

function addScore(scoreboard, winner) {
    if (scoreboard.player >= 5 || scoreboard.computer >= 5) {
        return;
    }

    switch (winner) {
        case "player":
            scoreboard.player++;
            break;
        case "computer":
            scoreboard.computer++;
            break;
        case "draw":
            break;
    }

    scoreDiv.textContent = `Player: ${scoreboard.player} - Computer: ${scoreboard.computer}`
}

function checkWinner(score) {
    if (score.player >= 5) {
        winnerDiv.textContent = "PLAYER WINS THE GAME!";
    } else if (score.computer >= 5) {
        winnerDiv.textContent = "COMPUTER WINS THE GAME!!";
    }
}
