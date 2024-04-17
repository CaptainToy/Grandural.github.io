const choices = ["ROCK", "PAPER", "SCISSORS"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const time = document.getElementById("time");
const reset = document.getElementById("Reset");
let playescore = 0;
let computerscore = 0;




function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE";
    }
    else {
        switch (playerChoice) {
            case "ROCK":
                result = (computerChoice === "SCISSORS") ? "YOU WIN" : "YOU LOSS";
                break;
            case "PAPER":
                result = (computerChoice === "ROCK") ? "YOU WIN" : "YOU LOSS";
                break;
            case "SCISSORS":
                result = (computerChoice === "PAPER") ? "YOU WIN" : "YOU LOSS";
                break;
        }
    }


    playerDisplay.textContent = ` PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("win", "loss");

    switch (result) {
        case "YOU WIN":
            resultDisplay.classList.add("win");
            playescore ++;
            playerScoreDisplay.textContent = playescore;
            break;
        case "YOU LOSS":
            resultDisplay.classList.add("loss");
            computerscore ++;
            computerScoreDisplay.textContent = computerscore;
            break;
        
        
    }
}
function 

function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("time").textContent = timeString;
}



updateClock();
setInterval(updateClock, 1000);


