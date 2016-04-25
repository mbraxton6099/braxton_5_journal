var random = Math.floor((Math.random() * 100) + 1);
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, c.width, c.height);

for (var i = 0; i < 24; i++) {
for (var j = 0; j <= 500; j++) {
    ctx.fillStyle = "#0000ff";
    if ((i + j) % 5 === 0) {
        ctx.fillRect((random * i), (random * j), 100, 43);
    }
}
}

for (var i = 0; i < 50; i++) {
for (var j = 0; j <= random; j++) {
    ctx.fillStyle = "#FF00ff";
    if ((i + j) % 2 === 0) {
        ctx.fillRect ((random * i), (random * j), 43, 43);
    }
}
}