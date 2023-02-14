fetch;
fetch("quizz.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  });
