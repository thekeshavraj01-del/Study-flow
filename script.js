let seconds = 0;
let timer = null;

const timerDisplay = document.getElementById("timer");

function updateTimer() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    timerDisplay.textContent =
        String(hrs).padStart(2, "0") + ":" +
        String(mins).padStart(2, "0") + ":" +
        String(secs).padStart(2, "0");
}

document.getElementById("startBtn").addEventListener("click", () => {
    if (timer) return;

    timer = setInterval(() => {
        seconds++;
        updateTimer();
    }, 1000);
});

document.getElementById("pauseBtn").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

document.getElementById("resetBtn").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateTimer();
});
