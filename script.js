let time = 0,
  interval;
const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");

function startStop() {
  if (interval) {
    // If the timer is running, stop it
    clearInterval(interval); // Stop the timer
    interval = null; // Reset the interval variable
    startStopBtn.innerText = "Start"; // Update button text
  } else {
    // If the timer is stopped, start it
    interval = setInterval(updateTime, 1000); // Start the timer
    startStopBtn.innerText = "Stop"; // Update button text
  }
}

function updateTime() {
  time++; // Increase time by 1 second
  let hours = Math.floor(time / 3600)
    .toString()
    .padStart(2, "0");
  let minutes = Math.floor((time % 3600) / 60)
    .toString()
    .padStart(2, "0");
  let seconds = (time % 60).toString().padStart(2, "0");
  display.innerText = `${hours}:${minutes}:${seconds}`; // Display time in HH:MM:SS format
}

function reset() {
  clearInterval(interval);
  interval = null;
  time = 0;
  display.innerText = "00:00:00";
  startStopBtn.innerText = "Start";
}
