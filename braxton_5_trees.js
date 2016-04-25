function drawBranches(context, startX, startY, trunkWidth, level){
if (level < 12){
var changeX = 100 / (level + 1);
var changeY = 200 / (level + 1);

var topRightX = startX + Math.random() * changeX;
var topRightY = startY - Math.random() * changeX;

var topLeftX = startX - Math.random() * changeX;
var topLeftY = startY - Math.random() * changeY;

//draw right Branch
context.beginPath();
context.moveTo(startX + trunkWidth / 4, startY);
context.quadraticCurveTo(startX + trunkWidth / 4, startY - trunkWidth,topRightX, topRightY);
context.lineWidth = trunkWidth;
context.lineCap = "round";
context.stroke();

//draw left Branch
context.beginPath();
context.moveTo(startX - trunkWidth / 4, startY);
context.quadraticCurveTo (startX - trunkWidth / 4,startY - trunkWidth, topLeftX, topLeftY);
context.lineWidth = trunkWidth;
context.lineCap = "round";
context.stroke();

drawBranches(context, topRightX , topRightY , trunkWidth * 0.7, level + 1);
drawBranches(context, topLeftX , topLeftY , trunkWidth * 0.7, level + 1);
}
}

window.onload = function () {
canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");

drawBranches(context, canvas.width / 2, canvas.height, 50, 0 );
};
        