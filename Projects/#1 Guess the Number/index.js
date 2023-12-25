"use strict";
const isItDevelopmentMode = false;
// Generating a unique randon no between 1 and 10
  let randomNo = Math.trunc(Math.random() * 10 + 1);
let userGuessedNo;
let score=10;
let guessesLeft = 5;
let isGameOver = false;
let msgLostTheGame = "🍇 You have lost this game, kindly consider Restart!";
let msgWonTheGame = "🍎 Congratulaiotns, You Have won this game, kindly consider Restart!";
let highScore = 0;
let hasUserWonThisGame = false;

function updateScore(restartMode=false){
  if(!isGameOver){
    if(!restartMode){
      score-=2;
    }

    document.querySelector("#userScore").innerHTML = score;      
  }
}

function updateHighScore(){
  if(isGameOver){
    // update the high score
    if(highScore<score){
      highScore = score;
    }
    document.querySelector("#userHighScore").innerHTML = highScore;   
  }
}

function updateBodyBackgroundColor(color){
    //updating body background 
    document.querySelector("body").style.backgroundColor=color;
    document.querySelector("#userGuessedNo").style.backgroundColor=color;   
}
function updateRandomNoToTheScreen(){
  document.querySelector("#randomNo").innerHTML = randomNo;
}

if(isItDevelopmentMode){
  // updating random no to 
  updateRandomNoToTheScreen();
}

// attaching event listener to check button
  document.querySelector("#btnCheck").addEventListener("click", function () {
    if(isGameOver){
      if(hasUserWonThisGame){
        let msg = document.querySelector("#labelStartGuessing").innerHTML = msgWonTheGame; 
        alert(msgWonTheGame);
      }
    }else{

    // only 5 chances will be given to user
    if(guessesLeft<=1){
      // lost the game, kindly restart
      let msg = document.querySelector("#labelStartGuessing").innerHTML = msgLostTheGame; 
      //updating body background color to red
        updateBodyBackgroundColor("#952525");
      // telling user that this was the generated random number  
        updateRandomNoToTheScreen();
      alert(msgLostTheGame);
      updateScore();
      isGameOver=true;
    }else{
      //fetching user guessed no
      let temp=document.querySelector("#userGuessedNo").value;
      userGuessedNo = Number(temp);
      // if user have provided any number
    
        // check if it matches the randomlyGeneratedNo?
        if(temp == ""){
          // Empty Input
          alert("Kindly guess any number and provide input");
        }else if(userGuessedNo>10 || userGuessedNo<=0){
          //guessed no is outside range
            alert("Kindly guess no. between 1 to 10 only!")
        }else{
          if (userGuessedNo == randomNo) {
            //equals user Won
            document.querySelector("#labelStartGuessing").innerHTML = "🍎 Correct Number!";
            //updating body background color to green
              updateBodyBackgroundColor("#0f7f0f");
              updateRandomNoToTheScreen();
            isGameOver =true;
            hasUserWonThisGame = true;
          } else if (userGuessedNo > randomNo) {
            // too high
            --guessesLeft;
            document.querySelector("#labelStartGuessing").innerHTML = "Too High!" + " You can Guess #" + guessesLeft + " more time" + (guessesLeft==1 ? "!" : "s!"); 
            updateScore();
          } else if (userGuessedNo < randomNo) {
            // too low
            --guessesLeft;
            document.querySelector("#labelStartGuessing").innerHTML = "Too Low!" + " You can Guess #" + guessesLeft + " more time" + (guessesLeft==1 ? "!" : "s!"); 
            updateScore();
          }
        }
      
    }
  
    updateHighScore();
      
    }
  });


// attaching event listener to Restart button
  document.querySelector("#btnRestart").addEventListener("click", function () {
     // Resetting to defaults
      randomNo = Math.trunc(Math.random() * 10 + 1);
      score=10;
      guessesLeft = 5;
      isGameOver = false;
      hasUserWonThisGame = false;     
      // Resetting GUI
      document.querySelector("#labelStartGuessing").innerHTML = "Start Guessing...";
      updateScore(true);
      updateHighScore();

      //updating body background color to black
      updateBodyBackgroundColor("black");  

      document.querySelector("#randomNo").innerHTML = "?";
      document.querySelector("#userGuessedNo").value = "";

  });