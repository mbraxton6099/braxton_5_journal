$(document).ready(function(){
    var score = 0;
    document.getElementById("score").innerHTML = "Score: " + score;
    $("#waldo").on('click', function () {
        $(this).fadeOut(500);
        $(".waldo").css("text-decoration", "line-through");
        score += 10;
        document.getElementById("score").innerHTML = "Score: " + score;
    });
    
    $("#heart").on('click', function () {
        $(this).fadeOut(500);
        $(".heart").css("text-decoration", "line-through");
        score += 10;
        document.getElementById("score").innerHTML = "Score: " + score;
    });
    
    
    $("#poop").on('click', function () {
        $(this).fadeOut(500);
        $(".poop").css("text-decoration", "line-through");
        score += 10;
        document.getElementById("score").innerHTML = "Score: " + score;
    });
    
     $("#cake").on('click', function () {
        $(this).fadeOut(500);
        $(".cake").css("text-decoration", "line-through");
         score += 10;
         document.getElementById("score").innerHTML = "Score: " + score;
    });
    
    $("#baby").on('click', function () {
        $(this).effect('shake');
        score += -10;
         document.getElementById("score").innerHTML = "Score: " + score;
    });
});

