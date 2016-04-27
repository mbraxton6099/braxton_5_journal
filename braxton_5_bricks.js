var canvas;
var ctx;
var x = 250;
var y = 200;
var x1 = 175;
var y1 = 25;
var dx1 = 2;
var dy1 = 4;
var WIDTH = 600;
var HEIGHT = 700;

function rect(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.closePath();
  ctx.fill();
}

function rect(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(200, 150, w, h);
  ctx.closePath();
  ctx.fill();
}

function rrect(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.closePath();
  ctx.fill();
}

function rect1(x1, y1, w1, h1) {
  ctx.beginPath();
  ctx.rect(x1, y1, w1, h1);
  ctx.closePath();
  ctx.fillStyle = "#00ff00";
  ctx.fill();
}

function rrect1(x1, y1, w1, h1) {
  ctx.beginPath();
  ctx.rect(x1, y1, w1, h1);
  ctx.closePath();
  ctx.fillStyle = "#ff0000";
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function init() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  return setInterval(draw, 10);
}

function draw() {

  clear();
  ctx.fillStyle = "#f1ffff";
  rect(0,0,WIDTH,HEIGHT);
  rrect(0,0,WIDTH,HEIGHT);
  rect1(x1, y1, 100, 50);
  rrect1(x1, y1, 100, 50);
    
    if (y1 + dy1 + 50 > HEIGHT || y1 + dy1 < 0)
    dy1 = 0;
    y1 += dy1;
}

init();