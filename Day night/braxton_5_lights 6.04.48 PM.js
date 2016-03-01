// JavaScript Document
var thing = true;
function clickOff() {
    
    if (thing === true){
        'use strict';
        var change1 = document.getElementById("Title"),
            change2 = document.getElementById("Bkgrnd"),
            change3 = document.getElementById("Menu");
        
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
function over() {
    'use strict';
    var change = document.getElementById("container");
    change.style.backgroundColor = '#f3f3f3';
}

function off() {
    'use strict';
    var change = document.getElementById("container");
    change.style.backgroundColor = '#6d8c8e';
}
