var question = document.getElementById("question");
var choices = document.getElementsByClassName("choices");
var htmlElem = document.getElementById("htmlElem");
var score = document.getElementsByClassName("score");
var startBtn = document.getElementById("startBtn");
var correctNumbers = 0;

var randomFunction = function (obj) {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

var Question_Ans = {
  question1: {
    question: "Animals that only eat plants are called:",
    choices: ["Plantivores", "Herbivores", "Vegevores", "Fernavores"],
    correct: 0,
  },
  question2: {
    question: "What's the nickname of the Academy Awards?",
    choices: ["The Tonys", "The Oscars", "The Nemos", "The Rogers"],
    correct: 0,
  },
  question3: {
    question: "Where did the Olympics originate?",
    choices: ["France", "Greece", "China", "Egypt"],
    correct: 0,
  },
  question4: {
    question: "The Egyptian Sphinx’s body is based on which animal?",
    choices: ["Hyena", "Lion", "Goat", "Horse"],
    correct: 0,
  },
  question5: {
    question: "Vampires are typically known for turning into which animal?",
    choices: ["Moose", "Bats", "Monkeys", "Cows"],
    correct: 0,
  },
};
var size = Object.keys(Question_Ans).length;

startBtn.addEventListener("click", (e) => {
  createQuiz();
});

function createQuiz() {
  htmlElem.innerHTML = "";
  let randomQuestionObj = randomFunction(Question_Ans);
  if (randomQuestionObj.correct === 1) {
    createQuiz();
  } else if (randomQuestionObj.correct === 0) {
    let randomChoices = randomQuestionObj.choices;
    question.innerHTML = `${randomQuestionObj.question}`;
    for (let i = 0; i < 4; i++) {
      let element = document.createElement("li");
      element.setAttribute("id", `choice-${i}`);
      let text = document.createTextNode(`${randomChoices[i]}`);
      let createBtn = document.createElement("button");
      createBtn.setAttribute("type", "button");
      createBtn.innerHTML = "Pick This";
      createBtn.setAttribute("id", `pickBtn${i}`);
      element.appendChild(text);
      element.appendChild(createBtn);
      htmlElem.appendChild(element);
      document.getElementById(`pickBtn${i}`).addEventListener("click", (e) => {
        if (e.target.parentNode.innerHTML.includes(randomChoices[1])) {
          alert("Correct answer!");
          randomQuestionObj.correct = 1;
          correctNumbers++;
          if (correctNumbers < size) {
            createQuiz();
          } else {
            alert("you have reached the end of the quiz");
          }
          // console.log(randomQuestionObj.correct);
        } else {
          alert("Wrong answer!");
        }
      });
    }
  }
}
