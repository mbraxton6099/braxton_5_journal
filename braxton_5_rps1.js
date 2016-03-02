var won = 0,
    lost = 0,
    tied = 0;
var botguess;
var thing = true;

function clickOff() {
    
    if (thing === true){
        'use strict';
        var change1 = document.getElementById("rock"),
            change2 = document.getElementById("paper"),
            change3 = document.getElementById("scissors");
        
        change1.style.backgroundColor = '#f00';
            change1.innerHTML = "NIGHT";
        change1.style.color = '#333';
        change2.style.backgroundColor = '#000';
        change3.style.backgroundColor = '#00ff1d';
            thing = false;
    } else {
        
        var change1 = document.getElementById("Title"),
            change2 = document.getElementById("Bkgrnd"),
            change3 = document.getElementById("Menu");
        
        change1.style.backgroundColor = '#535353';
        change1.style.color = '#fff';
            change1.innerHTML = "DAY";
        change2.style.backgroundColor = '#efefef';
        change3.style.backgroundColor = '#f5f';
            thing = true;
    }
}

function rock() {
    var bot = Math.floor((Math.random() * 3) + 1);
    
    if (bot == 1) {
        botguess = "Rock";
    } else if (bot == 2) {
        botguess = "Paper";
    } else {
        botguess = "Scissors";
    }
    
    document.getElementById("component").innerHTML="<br>The computer picked " + botguess;
    
    if (botguess == "Rock") {
        document.getElementById("result").innerHTML="You won this round!";
        won += 1;
    } else if (botguess == "Paper") {
        document.getElementById("result").innerHTML="You are tied this round!"; 
        tied += 1;
    } else {
        document.getElementById("result").innerHTML="You lost this round!";
        lost += 1;
    }
        document.getElementById("wlt").innerHTML="<br>Won = " + won + "<br>Lost = " + lost + "<br>Tied = " + tied;
}

function scissor() {
    var bot = Math.floor((Math.random() * 3) + 1);
    
    if (bot == 1) {
        botguess = "Rock";
    } else if (bot == 2) {
        botguess = "Paper";
    } else {
        botguess = "Scissors";
    }
    
    document.getElementById("botguess").innerHTML="<br>The computer picked " + botguess;
    
    if (botguess == "Rock") {
        document.getElementById("result").innerHTML="You lost this round!";
        lost += 1;
    } else if (botguess == "Paper") {
        document.getElementById("result").innerHTML="You won this round!";   
        won += 1;
    } else {
        document.getElementById("result").innerHTML="You are tied this round!";
        tied += 1;
    }
        document.getElementById("wlt").innerHTML="<br>Won = " + won + "<br>Lost = " + lost + "<br>Tied = " + tied;
}

function paper() {
    var bot = Math.floor((Math.random() * 3) + 1);
    
    if (bot == 1) {
        botguess = "Rock";
    } else if (bot == 2) {
        botguess = "Paper";
    } else {
        botguess = "Scissors";
    }
    
    document.getElementById("botguess").innerHTML="<br>The computer picked " + botguess;
    
    if (botguess == "Rock") {
        document.getElementById("result").innerHTML="You won this round!";
        won += 1;
    } else if (botguess == "Paper") {
        document.getElementById("result").innerHTML="You tied this round!";   
        tied += 1;
    } else {
        document.getElementById("result").innerHTML="You are lost this round!";
        lost += 1;
    }
        document.getElementById("wlt").innerHTML="<br>Won = " + won + "<br>Lost = " + lost + "<br>Tied = " + tied;
}

function replayb() {
    won = 0;
    lost = 0;
    tied = 0;
    
    document.getElementById("wlt").innerHTML="<br>Won = " + won + "<br>Lost = " + lost + "<br>Tied = " + tied;
}