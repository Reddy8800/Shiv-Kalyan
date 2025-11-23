// Countdown Timer (60 seconds loop)
let time = 60;

function updateTimer() {
    const el = document.getElementById("timer");
    const big = document.getElementById("big-counter");

    if (el) el.textContent = time + "s";
    if (big) {
        big.textContent = time;
        big.classList.remove("pulse");
        void big.offsetWidth;
        big.classList.add("pulse");
    }

    time--;
    if (time < 0) time = 60;
}

document.addEventListener("DOMContentLoaded", () => {
    updateTimer();
    setInterval(updateTimer, 1000);
});
