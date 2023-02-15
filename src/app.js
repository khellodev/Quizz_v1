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
    console.log(json);
  });

// jaffiche les quizzs
(async () => {
  const response = await fetch("/quizz2.json");
  const json = await response.json();
  console.log(json);

  console.log(json.name[0]);
  console.log(json.name[1]);

  let nodeList = document.querySelectorAll("li");
  nodeList[0].innerHTML = json.name[0];
  // let nodeList = document.querySelectorAll("li");
  // nodeList[0].innerHTML = json.name[0];
  // document.querySelectorAll()
})();
