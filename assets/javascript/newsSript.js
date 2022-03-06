var question = document.getElementById("question");
var choices = document.getElementsByClassName("choices");
var htmlElem = document.getElementById("htmlElem");
var startBtn = document.getElementById("startBtn");
var timer = document.getElementById("timer");
var bodyClass = document.getElementById("body-content");
var announcement = document.getElementById("announcement");

//will be assigned later => count down of 1 second
var intervalTimer;

//when this number reach 5, win condition is triggered
var correctNumbers = 0;

//timer
var start_Time; //timer for 30 seconds
var time;

//randomized variable;
var randomQuestionObj;
var randomChoices;

//quiz
var Question_Ans = {
  question1: {
    question: "Animals that only eat plants are called:",
    choices: ["Plantivores", "Herbivores", "Vegevores", "Fernavores"],
    correct: 0,
    correctAns: "Herbivores",
  },
  question2: {
    question: "What's the nickname of the Academy Awards?",
    choices: ["The Tonys", "The Oscars", "The Nemos", "The Rogers"],
    correct: 0,
    correctAns: "The Oscars",
  },
  question3: {
    question: "Where did the Olympics originate?",
    choices: ["France", "Greece", "China", "Egypt"],
    correct: 0,
    correctAns: "Greece",
  },
  question4: {
    question: "The Egyptian Sphinx’s body is based on which animal?",
    choices: ["Hyena", "Lion", "Goat", "Horse"],
    correct: 0,
    correctAns: "Lion",
  },
  question5: {
    question: "Vampires are typically known for turning into which animal?",
    choices: ["Moose", "Bats", "Monkeys", "Cows"],
    correct: 0,
    correctAns: "Bats",
  },
};

//length of trivia quiz
var size = Object.keys(Question_Ans).length;
//length of choice array
var choiceLength = Question_Ans.question1.choices.length;

//finds a random object -> question
var randomFunction = function (obj) {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

//finds a random array
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

//count down function
function countdown() {
  const minute = Math.floor(time / 60);
  let second = time % 60;
  second = second < 10 ? "0" + second : second;
  timer.innerHTML = `${minute}:${second}`;
  time--;
  // time = time < 0 ? 0 : time;
  if (time < 0) {
    time = time;
    announcement.style.display = "block";
    reloadPage();
  }
}

//start game
startBtn.addEventListener("click", (e) => {
  //reset time on click
  start_Time = 0.5;
  time = start_Time * 60;
  createQuiz();
});

//create quiz
function createQuiz() {
  htmlElem.innerHTML = "";
  if (!bodyClass.classList.contains("timerOn")) {
    intervalTimer = setInterval(countdown, 1000);
    bodyClass.classList.add("timerOn");
  }
  randomQuestionObj = randomFunction(Question_Ans);
  //if question is already correct, find another question
  if (randomQuestionObj.correct === 1) {
    createQuiz();
  } else if (randomQuestionObj.correct === 0) {
    randomChoices = shuffle(randomQuestionObj.choices);
    console.log(randomChoices);
    question.innerHTML = `${randomQuestionObj.question}`;
    //update Html content
    updateHtml();
    //"pick this" btn function
    pickBtnFunction();
  }
}

//"pick this" btn function
function pickBtnFunction() {
  //assign pickBtn Id with click event
  for (let i = 0; i < choiceLength; i++) {
    document.getElementById(`pickBtn${i}`).addEventListener("click", checkAns);
  }
}

//update Html content
function updateHtml() {
  for (let i = 0; i < choiceLength; i++) {
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
  }
}

//checks the correct answer with mouse event's target
function checkAns(e) {
  if (e.target.parentNode.innerHTML.includes(randomQuestionObj.correctAns)) {
    alert("Correct answer!");
    randomQuestionObj.correct = 1;
    correctNumbers++;
    if (correctNumbers < size) {
      createQuiz();
    } else {
      //timer will stop when all questions are answered
      clearInterval(intervalTimer);
      alert("All questions answers, the game will restart in 2 seconds");
      reloadPage();
    }
    // console.log(randomQuestionObj.correct);
  } else {
    alert("Wrong answer!");
  }
}

//reload the page in 3 seconds
function reloadPage() {
  setTimeout(() => {
    location.reload();
  }, 2000);
}
