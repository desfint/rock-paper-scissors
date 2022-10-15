function getComputerChoice() {
    const hands = ["Rock", "Paper", "Scissors"];

    return hands[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let winner;

    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "paper":
                    winner = "computer"
                    break;
                case "rock":
                    winner = "draw"
                    break;
                case "scissors":
                    winner = "player"
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "scissors":
                    winner = "computer"
                    break;
                case "paper":
                    winner = "draw"
                    break;
                case "rock":
                    winner = "player"
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    winner = "computer"
                    break;
                case "scissors":
                    winner = "draw"
                    break;
                case "paper":
                    winner = "player"
                    break;
            }
            break;
    }
    
    return winner
}

function game() {
    let score = {
        "computer": 0,
        "player": 0
    }

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose your hand! (Rock, Paper, Scissors)").toLowerCase();
        if (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")) {
            i--
            console.log("Enter a valid hand! (Rock, Paper, Scissors)")
            continue
        }

        let computerSelection = getComputerChoice()

        let winner = playRound(playerSelection, computerSelection)

        switch (winner) {
            case "player":
                score.player++
                console.log(`You win! ${playerSelection} beats ${computerSelection}`)
                break
            case "computer":
                score.computer++
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
                break
            case "draw":
                console.log("Draw! There is no winner")
        }
    }

    if (score.player > score.computer) {
        console.log("PLAYER WINS THE GAME!!")
    } else if (score.player < score.computer) {
        console.log("COMPUTER WINS THE GAME!!")
    } else {
        console.log("There is no winner")
    }
}

game()