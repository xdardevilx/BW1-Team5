const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
let risultato = urlParams.get("risultati");
let domande = urlParams.get("totaleDomande");
console.log(risultato, domande);

const risposteCorrette = parseInt(risultato);
const domandeTotali = parseInt(domande);
const numeroRisposte = function (correct, wrong) {
  const correctP = document.getElementById("correctQuestions");
  const wrongP = document.getElementById("wrongQuestions");
  const correctLength = correct + "/" + wrong + " questions";
  const wrongLength =
    wrong - parseInt(correctLength) + "/" + wrong + " questions";

  correctP.innerText = correctLength;
  wrongP.innerText = wrongLength;
};

numeroRisposte(risposteCorrette, domandeTotali);

const risultatoTest = function (correct, wrong) {
  const h3Circle1 = document.getElementById("h3Circle1");
  const h3Circle2 = document.getElementById("h3Circle2");
  const pCircle = document.getElementById("pCircle");

  if (correct > wrong / 2) {
    h3Circle1.innerText = "Congratulations!";
    h3Circle2.innerText = "You passed the exam.";
    pCircle.innerText =
      "We'll send you the certificate in few minutes.        Check your email (including promotions / spam folder)";
  } else {
    h3Circle1.innerText = "I'm sorry";
    h3Circle2.innerText = "You did not passed the exam.";
    pCircle.innerText = "You must repete the exam.";
  }
};

risultatoTest(risposteCorrette, domandeTotali);

const conteggioRisposte = function (correct, wrong) {
  const risposteEsattePercentuale = Math.floor((correct / wrong) * 100);
  const risposteErratePercentuale = 100 - risposteEsattePercentuale;
  const percentualeCorrette = document.getElementById("correct");
  const percentualeErrate = document.getElementById("wrong");
  percentualeCorrette.innerText = `${risposteEsattePercentuale} %`;
  percentualeErrate.innerText = `${risposteErratePercentuale} %`;
  const canvas = document.getElementById("graficoCiambella");

  let etichette = ["Risposte Errate", "Risposte Corrette"];
  let data = [risposteErratePercentuale / 10, risposteEsattePercentuale / 10];

  let color = ["#D20094", "#00FFFF"];
  const ciambella = new Chart(canvas, {
    type: "doughnut",
    data: {
      labels: etichette,

      datasets: [
        {
          borderWidth: 0,
          backgroundColor: color,
          data: data,
        },
      ],
    },
    options: {
      cutoutPercentage: 70,
      radius: "90%",

      legend: {
        display: false,
      },
    },
  });

  return ciambella;
};

conteggioRisposte(risposteCorrette, domandeTotali);

const buttonRateUs = document.getElementsByTagName("button")[0];
buttonRateUs.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./feedback.html";
});
