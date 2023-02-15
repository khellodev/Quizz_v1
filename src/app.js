// je vais chercher les questions
fetch("/question.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  });

// jaffiche les questions
(async () => {
  const response = await fetch("/question.json");
  const json = await response.json();
  document.getElementById("question").innerHTML = json.question;
  document.getElementById("rep1").innerHTML = json.reponses[0].libelle;
  document.getElementById("rep2").innerHTML = json.reponses[1].libelle;
  document.getElementById("rep3").innerHTML = json.reponses[2].libelle;
  document.getElementById("rep4").innerHTML = json.reponses[3].libelle;
})();
// copyright
document.getElementById("copy").innerHTML =
  "© QuizzMe - 2020 -" + new Date().getFullYear();

// *************************************************
// je vais chercher les quizzs
fetch("/quizz2.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    // console.log(json);
  });

// jaffiche les quizzs
app();

async function app() {
  const response = await fetch("/quizz2.json");
  const json = await response.json();
  console.log(json);

  var longeurTableau = json.length;

  document.getElementById("nbQuizz").innerHTML =
    longeurTableau + " Quizzs disponibles";

  var myList = document.getElementById("myList");

  // creation de ul element.
  var ul = document.createElement("ul");

  for (i = 0; i <= json.length - 1; i++) {
    // creation li element.
    var li = document.createElement("li");

    // sur chaque <li> je mets les "data"
    var data = i + 1 + " - " + json[i].titre;
    li.innerHTML = "<a href=''>" + data + "</a>";

    // ajoute un li a ul.
    ul.appendChild(li);
  }

  // ajoute ul de fin list a "myList".
  myList.appendChild(ul);
}
