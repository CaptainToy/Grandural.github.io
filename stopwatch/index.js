const display = document.getElementById("display");

let timer = null;
let startTimer = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (isRunning) {
        return;
    }
    isRunning = true;
    startTimer = Date.now();
    update(); // Update immediately when timer starts
    timer = setInterval(update, 100);
}

function stop() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = Date.now() - startTimer;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    startTimer = 0;
    display.textContent = "00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTimer;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, "0");
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, "0");
    let seconds = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, "0");
    let milliseconds = Math.floor(elapsedTime % 1000).toString().padStart(3, "0");

    display.textContent = `${hours}:${minutes}:${seconds}`;
}
