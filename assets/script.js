// User will click a button to start quiz : use button and event listener and function
// create variables for buttons
// create variable for score
// timer starts : timer
// timer presents a question 
// ability to answer question
// submit button for answers
// presented with another question after answering
// question answered wrong take time off timer : if statement
// game is over when all questions are answered or timer reaches 0
// when game is over ability to save initials and save score

var startBtnEl = document.querySelector(".start-btn");
var submitBtnEl = document.querySelector(".submit-btn"); 
var scoreEl = document.querySelector("#score-brd");
var timerEl = document.querySelector(".timer");

//timer
var minsLeft = 2;

function setTime() {
    var timerInterval = setInterval(function(){
        minsLeft--;
    })
}
// Start the game 

startBtnEl.addEventListener("click", function(){
    console.log("start button works")
})



//startBtnEl.addEventListener("click",);
// Questions
/*
var questions = [{
    questionTitle: "question1",
    answerChoices: ["1", "2", "3"],
    answer: "2",
},
{
    questionTitle: "question1",
    answerChoices: ["1", "2", "3"],
    answer: "2",
},
{
   questionTitle: "question1",
    answerChoices: ["1", "2", "3"],
    answer: "2", 
}];
*/
