console.log(window.location.href);
const risposteCorrette = [1, 1, 1, 1];
const risposteErrate = [1, 1, 1, 1, 1, 1];
const numeroRisposte = function () {
  const correctP = document.getElementById("correctQuestions");
  const wrongP = document.getElementById("wrongQuestions");
  const correctLength = risposteCorrette.length + "/10 questions";
  const wrongLength = risposteErrate.length + "/10 questions";

  correctP.innerText = correctLength;
  wrongP.innerText = wrongLength;
};

numeroRisposte();

const risultatoTest = function () {
  const risposteCorrette = [1, 1, 1, 1, 1, 1];
  const risposteErrate = [1, 1, 1, 1, 1, 1];

  const h3Circle1 = document.getElementById("h3Circle1");
  const h3Circle2 = document.getElementById("h3Circle2");
  const pCircle = document.getElementById("pCircle");

  if (risposteCorrette.length >= 5) {
    h3Circle1.innerText = "Congratulations!";
    h3Circle2.innerText = "You passed the exam.";
    pCircle.innerText =
      "We'll send you the certificate in few minutes.        Check your email (including promotions / spam folder)";
  } else {
    h3Circle1.innerText = "I'm sorry";
    h3Circle2.innerText = "You not passed the exam.";
    pCircle.innerText = "You must repete the exam.";
  }
};

risultatoTest();

const conteggioRisposte = function () {
  const risposteEsattePercentuale = risposteCorrette.length * 10;
  const risposteErratePercentuale = risposteErrate.length * 10;
  const percentualeCorrette = document.getElementById("correct");
  const percentualeErrate = document.getElementById("wrong");
  percentualeCorrette.innerText = `${risposteErratePercentuale} %`;
  percentualeErrate.innerText = `${risposteEsattePercentuale} %`;
  const canvas = document.getElementById("graficoCiambella");

  let etichette = ["errate", "corrette"];
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

conteggioRisposte();
