var number = Math.floor((Math.random() * 100) + 1);

document.writeln("Hello Champ!<br>- Mr. Davis");
var guess = prompt("Guess a number any number.", "1-100");
var payattentionmikeaddison = 4; 


while ((payattentionmikeaddison > 0) && (number != guess)) {
    if (number > guess) { 
        guess = prompt("Too low"); 
        payattentionmikeaddison--; 
        alert(payattentionmikeaddison + " guesses left");
} else {
    guess = prompt("Your number is too high , try again");
    payattentionmikeaddison--; 
    alert(payattentionmikeaddison + " guesses left"); 
}
}

if (number == guess) {
        document.write("Muy bien");
} else {
    document.write("<br>Those are some trash numbers friend");
}


document.write("<br> The number was " + number);