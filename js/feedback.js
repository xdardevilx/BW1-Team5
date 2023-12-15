const clickedStar = function () {
  const stars = document.querySelectorAll(".star i");
  const starsClicked = document.getElementsByClassName("clicked");

  for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("click", function () {
      for (let j = 0; j < stars.length; j++) {
        stars[j].classList.add("clicked");
      }
      // Rimuovo la classe 'clicked' dalle stelle successive a quella cliccata
      for (let k = i + 1; k < stars.length; k++) {
        stars[k].classList.remove("clicked");
      }
      console.log("Hai ricevuto ", starsClicked.length, "stelle");
    });
    stars[i].addEventListener("mouseenter", function () {
      for (let j = 0; j < stars.length; j++) {
        stars[j].classList.add("clicked");
      }
      for (let k = i; k < stars.length; k++) {
        stars[k].classList.remove("clicked");
      }
    });
  }
};

clickedStar();

const envoyedText = function () {
  const form = document.getElementById("form");
  const stars = document.querySelectorAll(".star i");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Il tuo parere è stato inviato");
    const textValue = document.getElementsByTagName("textarea")[0].value;
    console.log(textValue);
    for (let i = 0; i < stars.length; i++) {
      stars[i].classList.remove("clicked");
      window.location.href = "./welcome.html";
    }
    form.reset();
  });
};
envoyedText();
