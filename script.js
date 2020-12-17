// variables
let loss = 0;
let win = 0;

function computerPlay() {
    let randNum = 3 * Math.random();
    if (randNum < 1) {
        return 'rock';
    } else if (randNum < 2) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() === computerChoice) {
        return "It's a tie! You both chose " + computerChoice;
    } else if (computerChoice.toLowerCase() === 'rock') {
        if (playerChoice.toLowerCase() === 'paper') {
            win++;
            return "You Won! paper beats rock";
        } else {
            loss++;
            return "You Lost:( rock beats scissors";
        }
    } else if (computerChoice.toLowerCase() === 'paper') {
        if (playerChoice.toLowerCase() === 'rock') {
            loss++;
            return "You Lost:( paper beats rock";
        } else {
            win++;
            return "You Won! scissors beats paper";
        }
    } else {
        if (playerChoice.toLowerCase() === 'paper') {
            loss++;
            return "You Lost:( scissors beats paper";
        } else {
            win++;
            return "You Won! rock beats scissors";
        }
    }
}

function score() {
    if (win >= 5) {
        if (loss >=5) {
            return " Refresh the page to start again";
        }
        return " You won!";
    } else if (loss >= 5) {
        return " You lost :(";
    }
    return " " + win + "-" + loss;
}

// events
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const output = document.getElementById("output");

rockBtn.addEventListener('click', () => {
    const textOut = playRound("rock", computerPlay());
    output.innerText += "\n" + textOut + score();
});

paperBtn.addEventListener('click', () => {
    const textOut = playRound("paper", computerPlay());
    output.innerText += "\n" + textOut + score();
});

scissorsBtn.addEventListener('click', () => {
    const textOut = playRound("scissors", computerPlay());
    output.innerText += "\n" + textOut + score();
});
