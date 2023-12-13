const countdownDate = new Date().getTime() + 30000;
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  const seconds = Math.floor(distance / 1000);
  document.getElementById("seconds").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("seconds").innerHTML = mostraProssimaDomanda();
  }
  x();
}, 1000);
