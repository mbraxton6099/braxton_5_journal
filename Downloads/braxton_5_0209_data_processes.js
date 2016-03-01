document.getElementById("p2").style.color = "red";

document.write("This is how we math in JavaScript");


var k = prompt("Pick another number for K");
var r = prompt("Pick another number for R");
var d = (k+r);

/*We parseInt'ed so the variables would be treated as ints and not strings*/

var num1 = parseInt(k);
var num2 = parseInt(r);
var num3 = num1 + num2;

document.write("\n k is " + k + " r is " + r + ", and d is k + r and it's <br>" + num3);
document.write("\n  <br>multiplication:<br>");
document.write(r * d + " ");
document.write("\n <br>division\n<br>");
document.write(k / r + " ");
document.write("\n <br>Addition <br> ");
document.write(d + k + " ");
document.write("\n <br> Subraction <br>");
document.write(r - k + " ");

document.write("<br>this is num1 " + num1);
document.write("<br>this is num2 " +num2);
num1++;

document.write("<br>This is num1 " +num1++ +"<br>");
document.write("<br>this is num2 " +num2++ +"<br>");
num2++;

document.write("<br>this is num2 " +num2++ + "<br>");
document.write("<br>this is num2 " + (++num2) + "<br>");


document.write(++k);

document.write(k);
num1 = 52 

num1 += 5;
document.write("<br>" + num1);
num1 -= 5;
document.write("<br>" + num1);
num1 /= 5;
document.write("<br>" + num1);

/* L337 h@x0r5 use conditionals */

if ( k == r) {
    document.write("k and r are the same");
} 

else if ( k < r) {
    document.write("<br>R is greater than k");
} 

else if (k > r ) {
    document.write("<br> K is greater than R");
} 

else {
    document.write("<br>You are broken");
}