const risposteCorrette = [1, 1, 1, 1, 1, 1];
const risposteErrate = [1, 1, 1, 1];

const risultatoTest = function () {
  const h3Circle1 = document.getElementById("h3Cirle1");
  const h3Circle2 = document.getElementById("h3Circle2");
  const pCircle = document.getElementById("pCircle");

  if (risposteCorrette > 5) {
    h3Circle1.innerText("Congratulations!");
    h3Circle2.innerText("You passed the exam.");
    pCircle.innerText(
      "We'll send you the certificate in few minutes.Ceck your email (including promotions / spam folder)"
    );
    h3Circle1.innerText("I'm sorry");
    h3Circle2.innerText("You not passed the exam.");
    pCircle.innerText("You must repete the exam.");
  }
};

const conteggioRisposte = function () {
  const risposteEsattePercentuale = risposteCorrette.length * 10;
  const risposteErratePercentuale = risposteErrate.lenght * 10;
  const percentualeCorrette = document.getElementById("correct");
  const percentualeErrate = document.getElementById("wrong");
  percentualeCorrette.innerText = `${risposteEsattePercentuale} %`;
  percentualeErrate.innerText = `${risposteErratePercentuale} %`;
};

const canvas = document.getElementById("graficoCiambella");

let grafico = {
  labels: ["corrette", "errate"],
  datasets: [
    {
      data: [risposteCorrette.lenght, risposteErrate.lenght],
      backgroundColor: ["#00FFFF", "#D20094-#900080"],
    },
  ],
};
let ciambella = new Chart(canvas, {
  type: "donut",
  data: "grafico",
});
