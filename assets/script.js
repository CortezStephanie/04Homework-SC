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
var questions = [{
    questionTitle: "question1",
    answerChoices: ["1", "2", "3", "12"],
    answer: "12",
},
{
    questionTitle: "question2",
    answerChoices: ["4", "5", "6", "45"],
    answer: "5",
},
{
   questionTitle: "question3",
    answerChoices: ["7", "8", "9", "78"],
    answer: "8", 
}];

//timer
var currentQuestion = 0;
var secondsLeft = 30

function setTime() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time:" + secondsLeft;

        if(secondsLeft === 0 || currentQuestion >= questions.length) {
            clearInterval(timerInterval);
            endGame()
        }
    }, 1000);
}

function endGame () {
    document.getElementById("quizSection").setAttribute("style", "display: none;")
    document.getElementById("scoreInputSection").setAttribute("style", "display: block;")
}

// Start the game 

startBtnEl.addEventListener("click", function(){
    setTime();
    document.getElementById("startSection").setAttribute("style", "display: none;")
    document.getElementById("quizSection").setAttribute("style", "display: block;")
    showQuestion()
});

function showQuestion() {
    document.getElementById("questionText").textContent = questions[currentQuestion].questionTitle
    document.getElementById("optionOne").textContent = questions[currentQuestion].answerChoices[0]
    document.getElementById("optionTwo").textContent = questions[currentQuestion].answerChoices[1]
    document.getElementById("optionThree").textContent = questions[currentQuestion].answerChoices[2]
    document.getElementById("optionFour").textContent = questions[currentQuestion].answerChoices[3]
    
    
    document.getElementById("optionOne").addEventListener("click", checkAnswer)
    document.getElementById("optionTwo").addEventListener("click", checkAnswer)
    document.getElementById("optionThree").addEventListener("click", checkAnswer)
    document.getElementById("optionFour").addEventListener("click", checkAnswer)
}

function checkAnswer(event) {
    // console.log(event.target)
    var pickedChoice = event.target.textContent;
    // console.log(pickedChoice)
    if(pickedChoice === questions[currentQuestion].answer) {
        console.log("correct")
    } else {
        console.log("incorrect")
        secondsLeft -= 5
    }
    // console.log(this)
    currentQuestion++
    if(currentQuestion < questions.length){
        showQuestion()
    }
}
//startBtnEl.addEventListener("click",); not correct
// Questions


