const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let domandaCorrente = 0;

const risposteSelezionate = [];
// funzione crea domande
const mostraDomanda = function (idDomanda, listaDomande) {
  const domandeContainer = document.getElementById("domande");

  const paragrafoDomanda = document.createElement("p");
  domandeContainer.innerHTML = "";

  if (idDomanda < listaDomande.length) {
    paragrafoDomanda.innerText = listaDomande[idDomanda].question;
    domandeContainer.appendChild(paragrafoDomanda);
  } else {
    domandeContainer.innerHTML = "hai completato tutte le domande";
    domandeContainer.appendChild(paragrafoDomanda);
  }
};

const contatoreIndiceDomanda = function (idDomanda, listaDomande) {
  const indiceDomanda = document.getElementById("indice-domanda");
  const totDomande = document.getElementById("num-domande");

  totDomande.innerHTML = "/" + listaDomande.length;
  if (idDomanda < listaDomande.length) {
    indiceDomanda.innerHTML = idDomanda + 1;
  }
};

const creaRadioButton = function (risposta) {
  const risposteContainer = document.getElementById("risposte");
  const label = document.createElement("label");
  label.classList.add("custom-radio");

  const radioButton = document.createElement("input");
  radioButton.type = "radio";
  radioButton.name = "rb";
  radioButton.value = risposta;

  const divRadioButton = document.createElement("div");
  divRadioButton.classList.add("radio-button");

  const span = document.createElement("span");
  span.classList.add("radio-label");
  span.innerHTML = risposta;

  risposteContainer.appendChild(label);
  label.appendChild(radioButton);
  label.appendChild(divRadioButton);
  label.appendChild(span);
};

const pulisciRisposteContainer = function () {
  const risposteContainer = document.getElementById("risposte");
  while (risposteContainer.firstChild) {
    risposteContainer.removeChild(risposteContainer.firstChild);
  }
};

const mostraRisposte = function (idDomanda, listaDomande) {
  let totRisposte = [];
  pulisciRisposteContainer();
  if (idDomanda < listaDomande.length) {
    const resp = listaDomande[idDomanda].correct_answer;
    totRisposte.push(resp);

    totRisposte = totRisposte.concat(listaDomande[idDomanda].incorrect_answers);

    totRisposte.forEach((e) => {
      creaRadioButton(e);
    });
  }
};

const mostraProssimaDomanda = function () {
  if (domandaCorrente < questions.length) {
    prendiValoreRadioButton(domandaCorrente);
    mostraDomanda(domandaCorrente, questions);
    contatoreIndiceDomanda(domandaCorrente, questions);
    mostraRisposte(domandaCorrente, questions);
  } else if (domandaCorrente === questions.length) {
    // mostraDomanda(domandaCorrente, questions);
    navigazioneInResultPagina();

    console.log(risultati(questions));
  }
  domandaCorrente++;
};

const prendiValoreRadioButton = function (idDomanda) {
  let r = {};
  let inputRadio = document.querySelectorAll('input[name="rb"]:checked');

  r.idDomanda = idDomanda;
  if (inputRadio.length > 0) {
    inputRadio.forEach((e) => {
      r.rispostaData = e.value;
    });
  } else {
    r.rispostaData = null;
  }

  console.log(r);
  risposteSelezionate.push(r);
  console.log(risposteSelezionate);
};

const risultati = function (listaDomande) {
  let punti = 0;
  risposteSelezionate.forEach((e) => {
    if (e.rispostaData === listaDomande[e.idDomanda].correct_answer) {
      punti++;
    }
  });
  return punti;
};

const navigazioneInResultPagina = function () {
  let parametro = risultati(questions);
  window.location.href = "./result.html" + "?risultati=" + parametro;
};
// init
mostraDomanda(domandaCorrente, questions);
contatoreIndiceDomanda(domandaCorrente, questions);
mostraRisposte(domandaCorrente, questions);
