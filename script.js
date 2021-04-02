//Variables
var clock= document.getElementById("clock");
var listAnswer=[];

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
  document.getElementById("question").textContent=questionsArray[index].title;
   var userAnswers=questionsArray[index].answer;
   userAnswers.forEach(showChoises);
 }
}

function showChoises() {
  var listAnswer=document.createElement("button");
  listAnswer.textContent=item;
  document.getElementById('answers').appendChild(listAnswer);
}
