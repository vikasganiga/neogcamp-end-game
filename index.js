var readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " to DO YOU KNOW Vikas?");

// High Scores 
var highScores = [
  {
    name: "John",
    score: 10
  },
  {
    name: "Mark",
    score: 4
  }
];

// Play Function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("Right!");
    score = score + 2;
  } else {
    console.log("Wrong!");
  }

  console.log("Current Score: " + score);
  console.log("------------------\n");
}

// List of Questions
var questions = [
  {
    question: "Where do I leave? ",
    answer: "Mangalore"
  },
  {
    question: "My favorite superhero would be? ",
    answer: "Iron Man"
  },
  {
    question: "My favorite sports? ",
    answer: "Kabaddi"
  },
  {
    question: "What is the capital city of India? ",
    answer: "New Delhi"
  },
  {
    question: "Which is the national sport of India? ",
    answer: "Hockey"
  }
];

// Looping over each question
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("YAY! You SCORED: " + score + "\n");

console.log("Check out the High Scores");
console.log("---------------------------");

for (var i=0; i<highScores.length; i++) {
  var current = highScores[i];
  console.log(current.name + " ::: " + current.score);
}

