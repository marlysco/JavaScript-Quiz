//Variables
var clock= document.getElementById("clock");
var userChoises=[];
var score=0

var questionsArray = [
  {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
  },
  {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
  },
  {
      title: "Arrays in Javascript can be used to store ____.",
      choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      answer: "all of the above"
  },
  {
      title: "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parenthesis"],
      answer: "quotes"
  },
  {
      title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
      choices: ["Javascript", "terminal / bash", "for loops", "console log"],
      answer: "console log"
  },

];



//1-When the user clicks the start button:
document.getElementById("start").addEventListener("click", function(){
  //The clock start the countdown from 80 secs
  var timeLeft=80;
  //Score is reset
  var score = 0;
  //Index set to show the first question
  var index = 0;
  //Timer
      var timeInterval=setInterval(function(){
        console.log(timeInterval);
        if (timeLeft>0){
          clock.textContent=timeLeft; 
          timeLeft--;
          console.log(timeLeft);
      }
      else {
        clock.textContent="0";
        input();
      }}, 1000);

  //Clear the titles and start button
  clear ();  
  setQuiz(index);
})

function clear () {
  document.getElementById("start").style.display="none" ;
  document.getElementById("intro").style.display="none";
  document.getElementById("info").style.display="none";
}
    

function setQuiz(index) {
 for (var i=0; i<=questionsArray.length; i++) {
  if (index > questionsArray.length) {
    gameOver();
  }
   //Show the question
  document.getElementById("question").textContent=questionsArray[index].title;
  //Show the choises for this question
  var userChoises = questionsArray[index].choises;
  console.log(userChoises); 
  userChoises.forEach(showChoises);
  //Check if the answer is correct or no
  listChoises.addEventListener("click", checkAnswer());
 }
}

function showChoises() {
  var listChoises=document.createElement("button");
  listChoises.textContent=item;
  console,log(item);
  document.getElementById('answers').appendChild(listChoises);
}

function checkAnswer(event) {
  if (event.target.matches('button')){
    var userPicked = event.textContent;
    //If answer is correct, let the ;user know and go to next question (if is not the last one)
  if (userPicked === questionsArray[index].answer && timeLeft>0) {
    message(Correct, );
    score= score + 10;
  }
  //If answer is correct but time is over, end game nad let and show the user info input
  else if ( timeLeft<= 0) {
    gameOver();
  }
  //If answer is incorrect, let the user know and check time 
  else {
    message(Incorrect, );
    timeLeft= timeLeft -10;
    console.log(timeLeft);
    if (timeLeft <= 0) {
    gameOver()
    }
  }
  } 
}

function gameOver(){
  message(Game, Over);
  input();
  }

function message(a,b) {
  var messageTime = setInterval (function(){
    console.log(messageTime);
    document.getElementById("info").textContent=a + b
    document.getElementById("info").style.display="block";
  },3000);
}

function input (){
  //Clear the screen
  clear ();
  listChoises.style.display="none" 
  //All done!
  document.getElementById("intro").textContent="All Done!!"
  document.getElementById("intro").style.display="block";
  //Show user score
  document.getElementById("info").textContent="Your final score is "+ score;
  document.getElementById("info").style.display="block";
  //
  var enterInit = document.createElement("div");
  enterInit.textContent="Please enter your initials: ";
  document.getElementById("info").appendChild(enterInit);
  enterInit.style.display="flex";
  //Input to enter the initials 
  var intInput=document.createElement('input');
  intInput.style.display="flex";
  intInput.setAttribute("type", "text");
  intInput.textContent="Your initials here"
  document.getElementById("info").appendChild(intInput)
  //Submit button 
  var submit=document.createElement('button');
  submit.textContent="Submit";
  submit.style.display="flex"
  document.getElementById("info").appendChild(submit);
  //When submit button is clicked
  submit.addEventListener("click", function () {
    var initials = intInput.value;
    if (initials === null) {
        alert("Please enter your initials");
    } else {
        var finalScore = {
            initials: initials,
            score: score,
        }
        console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
    }
});
}

var highScore =document.getElementById("score");
highScore.addEventListener("click", function(){
  //Clear the screen
  clear ();
  listChoises.style.display="none" 
  intInput.textContent=""
  submit.style.display="none";
  enterInit.style.display="none";
  
  var allScores = localStorage.getItem("allScores");
  allScores = JSON.parse(allScores);

  if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
  }
