var question = document.getElementById("question");
var choices = document.getElementsByClassName("choices");
var htmlElem = document.getElementById("htmlElem");
var score = document.getElementsByClassName("score");
var startBtn = document.getElementById("startBtn");

var randomFunction = function (obj) {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

var Question_Ans = {
  question1: {
    question: "Animals that only eat plants are called:",
    answers: ["Plantivores", "Herbivores", "Vegevores", "Fernavores"],
  },
  question2: {
    question: "What's the nickname of the Academy Awards?",
    answers: ["The Tonys", "The Oscars", "The Nemos", "The Rogers"],
  },
};

startBtn.addEventListener("click", (e) => {
  htmlElem.innerHTML = "";
  //   console.log(createBtn);
  let randomQuestionObj = randomFunction(Question_Ans);
  let randomChoices = randomQuestionObj.answers;
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
      if ( ) {
        console.log("e");
      }
    });
    //
  }
  //   let pickBtn = document.getElementById("pickBtn");
  //   pickBtn.addEventListener("click", (e) => {
  //     if (randomChoices[3]) {
  //       console.log("correct answer");
  //     } else if (randomChoices[0]) {
  //       console.log("wrong answer");
  //     }
  //     // if (randomChoices[e]) {
  //     //   console.log("e");
  //     // }
  //   });
});

// function checkAns(e) {
//   if (randomChoices[0]) {
//     console.log("e");
//   }
// }
