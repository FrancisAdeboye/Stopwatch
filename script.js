let hr = min = sec = ms = "0" + 0,
startTimer;

const startButton = document.querySelector(".start-btn");
const pauseButton = document.querySelector(".pause-btn");
const resetButton = document.querySelector(".reset-btn");

startButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);

function start() {
startButton.classList.add("active");
startButton.classList.remove("stopActive");

startTimer = setInterval(() => {
  ms++;
  ms = ms < 10 ? "0" + ms : ms;

  if (ms === 100) {
    sec++;
    sec = sec < 10 ? "0" + sec : sec;
    ms = "0" + 0;
  }
  if (sec === 60) {
    min++;
    min = min < 10 ? "0" + min : min;
    sec = "0" + 0;
  }
  if (min === 60) {
    hr++;
    hr = hr < 10 ? "0" + hr : hr;
    min = "0" + 0;
  }

putValue();
},10)
}

function pause() {
pauseButton.classList.add("stopActive");
pauseButton.classList.remove("active");
clearInterval(startTimer);
}

function reset() {
resetButton.classList.add("stopActive");
resetButton.classList.remove("stopActive")
clearInterval(startTimer);
hr = min = sec = ms = "0" + 0;
putValue();
}

function putValue() {
document.querySelector(".milliseconds").innerText = ms;
document.querySelector(".seconds").innerText = sec;
document.querySelector(".minutes").innerText = min;
document.querySelector(".hours").innerText = hr;
}