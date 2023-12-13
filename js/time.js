let intervalloTimer = null;
let tempoRimanente = 30;
const startTimer = function () {
  clearInterval(intervalloTimer);
  let countdownDate = new Date().getTime() + tempoRimanente + 30000;
  /* const barra = document.getElementById("progress"); */
  intervalloTimer = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    let seconds = Math.floor(distance / 1000);
    console.log(seconds);
    document.getElementById("seconds").innerText = seconds;
    if (distance < 0) {
      clearInterval(intervalloTimer);
      document.getElementById("seconds").innerText = mostraProssimaDomanda();
      document.getElementById("seconds").innerText = "30";
      countdownDate = new Date().getTime() + 30000;
      startTimer();
    }
  }, 1000);
};
startTimer();
