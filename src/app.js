fetch("/question.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  });
// console.log("hello");

(async () => {
  const response = await fetch("/question.json");
  const json = await response.json();
  document.getElementById("question").innerHTML = json.question;
  document.getElementById("rep1").innerHTML = json.reponses[0].libelle;
  document.getElementById("rep2").innerHTML = json.reponses[1].libelle;
  document.getElementById("rep3").innerHTML = json.reponses[2].libelle;
  document.getElementById("rep4").innerHTML = json.reponses[3].libelle;
})();
// (json.phoneNumber[1].type);
