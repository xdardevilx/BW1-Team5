console.log(window.location.href);
const risposteCorrette = [1, 1];

const numeroRisposte = function (correct) {
  const correctP = document.getElementById("correctQuestions");
  const wrongP = document.getElementById("wrongQuestions");
  const correctLength = correct.length + "/10 questions";
  const wrongLength = 10 - parseInt(correctLength) + "/10 questions";

  correctP.innerText = correctLength;
  wrongP.innerText = wrongLength;
};

numeroRisposte(risposteCorrette);

const risultatoTest = function (correct) {
  const h3Circle1 = document.getElementById("h3Circle1");
  const h3Circle2 = document.getElementById("h3Circle2");
  const pCircle = document.getElementById("pCircle");

  if (correct.length > 5) {
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

risultatoTest(risposteCorrette);

const conteggioRisposte = function (correct) {
  const risposteEsattePercentuale = correct.length * 10;
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

conteggioRisposte(risposteCorrette);
