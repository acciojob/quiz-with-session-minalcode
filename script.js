
const questionsElement = document.getElementById("questions");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");

// Restore answers from sessionStorage
let userAnswers = JSON.parse(
  sessionStorage.getItem("progress") || "{}"
);

// Display saved score after page refresh
const savedScore = localStorage.getItem("score");

if (savedScore !== null) {
  scoreElement.textContent = `Your score is ${savedScore} out of 5.`;
}

// Save answer whenever a radio button is selected
questionsElement.addEventListener("change", function (event) {
  if (event.target.type === "radio") {
    const questionIndex = event.target.name.split("-")[1];

    userAnswers[questionIndex] = event.target.value;

    sessionStorage.setItem("progress", JSON.stringify(userAnswers));
  }
});

// Submit quiz and calculate score
submitButton.addEventListener("click", function () {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }

  // Save final score in localStorage
  localStorage.setItem("score", score);

  // Display final score
  scoreElement.textContent = `Your score is ${score} out of 5.`;
});
