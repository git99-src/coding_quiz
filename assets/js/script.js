
// create references to dom elements
var startEl = document.querySelector("#start");
var timeEl = document.getElementById(".time");
var questionViewEl = document.getElementById("ask-question");
var answersViewEl = document.getElementById("list-answers");
var correctViewEl = document.getElementById("correctAnswer");

var questions = [
  {
    questionMain: "Which is not a tag in HTML?",
    answerOne: "div",
    answerTwo: "p",
    answerThree: "one",
    answerFour: "body",
    correct: "one"
  },
  {
    questionMain: "What does the acronym CDN stand for in Web Development?",
    answerOne: "Content Distribution Network",
    answerTwo: "Comma Derived Node",
    answerThree: "Content Delivery Network",
    answerFour: "Comment Delimiter Name",
    correct: "Content Delivery Network"
  },
  {
    questionMain: "Which is not a tag in HTML?",
    answerOne: "div",
    answerTwo: "p",
    answerThree: "one",
    answerFour: "body",
    correct: "one"
  },
];
function displayQuestion(question) {
  
  questionViewEl.innerHTML =
      "<h2>" + question.questionMain + "</h2>"; 
  answersViewEl.innerHTML =
      "<li>" + question.answerOne + "</li>" +
      "<li>" + question.answerTwo + "</li>" +
      "<li>" + question.answerThree + "</li>" +
      "<li>" + question.answerFour + "</li>";
  
};

// user clicked on answer
answersViewEl.addEventListener("click",function(event) {
  var element = event.target
  console.log(element)
  


});
// create variable to keep track of the time
var secondsLeft = 30;

// Updates the displayed count
function setTime() {
  // start countdown

  var timerInterval = setInterval(function() {
    
    // each interval we....
    
    // decrement time remaining
    secondsLeft--;

    // update the count down
    //timeEl.textContent = secondsLeft + " seconds left";

    // check if time has run out
    if(secondsLeft === 0) {
      // stop the interval by passing the identifier returned by setInterval to
      // the clearInterval method.
      clearInterval(timerInterval);
    }

  }, 1000);
  //countEl.textContent = count;
}

// increment count and update the display each time the
// user clicks the increment button
startEl.addEventListener("click", function() {
 console.log ("lello")
 setTime();
 displayQuestion(questions[1]);
});



