const canvas = new CanvasCircularCountdown(
  document.getElementById("countdown-canvas"),
  {
    duration: 30000,
    elapsedTime: 0,
    clockwise: true,
    radius: 80,
    progressBarWidth: 15,
    progressBarOffset: 5,
    circleBackgroundColor: "#00000000",
    emptyProgressBarBackgroundColor: "#9a6a9e",
    filledProgressBarBackgroundColor: "#00ffff",
    showCaption: false,
    captionColor: "#343a40",
    captionFont: "20px sans-serif",
  }
).start();

const reset = function onStartClicked() {
  canvas.reset();
};
const restart = function onStartClicked() {
  canvas.start();
};

let intervalloTimer = null;
let tempoRimanente = 30;
const startTimer = function () {
  clearInterval(intervalloTimer);
  let countdownDate = new Date().getTime() + tempoRimanente + 30000;
  const barra = document.getElementById("progress");
  intervalloTimer = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    let seconds = Math.floor(distance / 1000);
    document.getElementById("seconds").innerHTML = seconds;
    if (distance < 0) {
      clearInterval(intervalloTimer);
      document.getElementById("seconds").innerText = mostraProssimaDomanda();
      document.getElementById("seconds").innerText = "30";
      countdownDate = new Date().getTime() + 31000;
      startTimer();
      reset();
      restart();
    }
  }, 1000);
};
startTimer();
