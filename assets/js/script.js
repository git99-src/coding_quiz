
// create references to dom elements
var startEl = document.querySelector("#start");
var timeEl = document.getElementById("time");
var questionViewEl = document.getElementById("ask-question");
var answersViewEl = document.getElementById("list-answers");
var instructionsEl = document.getElementById("instructions");
var startEl = document.getElementById("startQuiz");
var listEl = document.getElementById("list");
var itemsEl = document.getElementById("list-group-item");
var isCorrect = " ";
var answerCorrectly = false;
var items = [];
var totalCorrect = 0;
var totalQuestions = 0;
var secondsLeft = 10;


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
function loadArrayItems(question) {
  
  items = [];
  items.push(question.questionMain);
  items.push(question.answerOne);
  items.push(question.answerTwo);
  items.push(question.answerThree);
  items.push(question.answerFour);
  isCorrect = question.correct
  console.log (items)
};
// function displayQuestion(question) {
  function displayQuestion() {
    resetQuestion(); 
  //are there more questions?  
  if (totalQuestions < 4){
          
    loadArrayItems(questions[totalQuestions]);
  } else {
    alert("no more questions - game over")
    // when the user returns to the page
    localStorage.setItem("count", totalCorrect);
  };
  for (var i = 0; i < items.length; i++) {
    // render question here
    if (i === 0){
      var newLiEl = document.createElement("LI");
      newLiEl.textContent = items[i];
      listEl.appendChild(newLiEl);
    } else {
    // render answer buttons here  
    var itemBtnEl = document.createElement("BUTTON");
    itemBtnEl.classList ="btn btn-secondary item-button";
    itemBtnEl.textContent = items[i];

    newLiEl = document.createElement("LI");
    newLiEl.setAttribute("class", "list-group-item")
    newLiEl.appendChild(itemBtnEl);
    listEl.appendChild(newLiEl);
   };
  ;}
  
  listEl.addEventListener("click", function(event) {
    if (event.target.matches(".item-button"))
      if (isCorrect === event.target.textContent){
      // good answer  
      alert("correct");
      totalCorrect++
      totalQuestions++
      displayQuestion();

      } else {
       // incorrect answer 
       alert("incorrect");
       secondsLeft = secondsLeft - 5
       totalQuestions++
       displayQuestion();

     }; 
 
    });
   
      
};

function resetQuestion(){
  instructionsEl.innerHTML = " ";

};

// start time
function setTime() {

  // start countdown
  // create variable to keep track of the time
  secondsLeft = 60;
  var timerInterval = setInterval(function() {
    if (secondsLeft > 0) {
    
    
    // decrement time remaining
    secondsLeft--;

    // update the count down
    timeEl.innerHTML = secondsLeft + " seconds left";

    } else {
    // check if time has run out
    
      // the clearInterval method.
      clearInterval(timerInterval);
      alert("game over");
      // when the user returns to the page
      localStorage.setItem("count", totalCorrect);
      //display score
    }

  }, 1000);
  //countEl.textContent = count;
}


// increment count and update the display each time the
// user clicks the increment button
startEl.addEventListener("click", function() {
  // instructionsEl.innerHTML = " ";
  startEl.setAttribute("hidden", true);
  setTime();
  displayQuestion();
    // display question
  // displayQuestion(questions[1]);
 
 
});



