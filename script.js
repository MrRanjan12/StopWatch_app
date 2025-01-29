let time = 0, interval;
const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");

function startStop() {
    if (interval) {
        clearInterval(interval);
        interval = null;
        startStopBtn.innerText = "Start";
    } else {
        interval = setInterval(() => {
            time++;
            display.innerText = new Date(time * 1000).toISOString().substr(11, 8);
        }, 1000);
        startStopBtn.innerText = "Stop";
    }
}

function reset() {
    clearInterval(interval);
    interval = null;
    time = 0;
    display.innerText = "00:00:00";
    startStopBtn.innerText = "Start";
}
