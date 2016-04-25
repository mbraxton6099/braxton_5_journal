var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 *Math.PI);
ctx.stroke();
ctx.fillStyle="yellow";
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#FF0000";
ctx.fillRect(350,250,150,75);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "brown";
ctx.fillRect(420,285,20,40);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(350, 250);
ctx.lineTo(425, 200);
ctx.lineTo(500, 250);
ctx.closePath();
ctx.lineWidth = 1;
ctx.fillStyle = 'brown';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "brown";
ctx.fillRect(620,285,20,40);
ctx.stroke();

ctx.beginPath();
ctx.arc(630, 260, 30, 0, 2 *Math.PI);
ctx.stroke();
ctx.fillStyle="green";
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "brown";
ctx.fillRect(220,285,20,40);
ctx.stroke();

ctx.beginPath();
ctx.arc(230, 260, 30, 0, 2 *Math.PI);
ctx.stroke();
ctx.fillStyle="green";
ctx.fill();