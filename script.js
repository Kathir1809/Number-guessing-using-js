'use strict';

let number = Math.trunc(Math.random()*20)+1;


let score = Number(document.querySelector(".score").textContent)
let highscore = 0;


function message(mess){
    score -= 1
    document.querySelector(".message").textContent = mess
    document.querySelector(".score").textContent = score;
}

function check(){
    const guess = document.querySelector(".guess").value
    if (score > 0){
        if(!guess){
            message("No Number");
            
        }else if (number === Number (guess)){
            message("You're correct")
            document.querySelector(".number").textContent = number
            document.querySelector(".score").textContent = score;
            document.querySelector("body").style.backgroundColor = "green"
            
            if (score > highscore){
                highscore = score
            }
        
            document.querySelector(".highscore").textContent = highscore

        }else if ( Number (guess) <= 0 || Number(guess) > 20  ){
            message("Enter Numbers between 1 - 20 only");

        } else if (Number (guess) > number){
            message("Too high");

        }else if (Number (guess) < number){
            message("Too Low");
        }
    }
    else {
        message("You lose the game")
        document.querySelector("body").style.backgroundColor = "red"
    }
    
}


document.querySelector(".check").addEventListener("click", check)

function reset(){

    if (score > highscore){
        highscore = score
    }

    document.querySelector(".highscore").textContent = highscore

    score = 20
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#222"
    number = Math.trunc(Math.random()*20)+1;
    message("Start guessing...")
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = "";
}

document.querySelector(".again").addEventListener("click", reset)