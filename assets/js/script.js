
// create references to dom elements
var startEl = document.querySelector("#start");
var timeEl = document.getElementById("time");
var questionViewEl = document.getElementById("ask-question");
var answersViewEl = document.getElementById("list-answers");
var correctViewEl = document.getElementById("correctAnswer");
var instructionsEl = document.getElementById("instructions");
var buttonE1l = document.getElementById("start");
var isCorrect = " ";
var answerCorrectly = false;

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
  resetQuestion();
  questionViewEl.innerHTML =
      "<h2>" + question.questionMain + "</h2>"; 
  answersViewEl.innerHTML =
      "<li>" + question.answerOne + "</li>" +
      "<li>" + question.answerTwo + "</li>" +
      "<li>" + question.answerThree + "</li>" +
      "<li>" + question.answerFour + "</li>"; 
     
     isCorrect = question.correct;
      
};

function resetQuestion(){
  questionViewEl.innerHTML = " ";
  answersViewEl.innerHTML = " ";
};

// user clicked on answer
answersViewEl.addEventListener("click",function(event) {
  var element = event.target.textContent
  console.log(isCorrect)
  console.log (element)
  answerCorrectly = false;
  //is the answer correct?
   if (isCorrect === (element)){
    alert("correct answer");
    answerCorrectly = true;
    
   }

  displayQuestion(questions[1]);
 
  });


// Updates the displayed count
function setTime() {

  // start countdown
  // create variable to keep track of the time
  var secondsLeft = 10;
  var timerInterval = setInterval(function() {
    if (secondsLeft > 0) {
    // each interval we....
    
    // decrement time remaining
    secondsLeft--;

    // update the count down
    //timeEl.textContent = secondsLeft + " seconds left";
    timeEl.innerHTML = secondsLeft + " seconds left";

    } else {
    // check if time has run out
    
      // stop the interval by passing the identifier returned by setInterval to
      // the clearInterval method.
      clearInterval(timerInterval);
      alert("game over");
      //display score
    }

  }, 1000);
  //countEl.textContent = count;
}

// increment count and update the display each time the
// user clicks the increment button
startEl.addEventListener("click", function() {
  instructionsEl.innerHTML = " ";
  startEl.remove();
  setTime();
    // display question
  displayQuestion(questions[1]);
 ;
});



