const countdownDate = new Date().getTime() + 31000;
const time = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  const seconds = Math.floor(distance / 1000);
  document.getElementById("seconds").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(time);
    document.getElementById("seconds").innerHTML = mostraProssimaDomanda();
  }
}, 1000);
