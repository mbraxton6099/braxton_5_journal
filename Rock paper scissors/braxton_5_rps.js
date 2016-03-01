var thing = true;
function clickOff() {
    
    if (thing === true){
        'use strict';
        var change1 = document.getElementById("rock"),
            change2 = document.getElementById("paper"),
            change3 = document.getElementById("scissor");
        
        change1.style.backgroundColor = '#09F201';
        change2.style.backgroundColor = '#000';
        change3.style.backgroundColor = '#FF2100';
            thing = false;
    } else {
        
        var change1 = document.getElementById("rock"),
            change2 = document.getElementById("paper"),
            change3 = document.getElementById("scissor");
        
        change1.style.backgroundColor = 'dimgray';
        change2.style.backgroundColor = '#efefef';
        change3.style.backgroundColor = 'greenyellow';
            thing = true;
    }
}