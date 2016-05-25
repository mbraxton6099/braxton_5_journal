window.onload = function() {
    var anim = new Animation("myCanvas");
    var canvas = anim.getCanvas();
    var context = anim.getContext();
    
    var amplitude = Math.PI / 4; //45 degrees
    var period = 5000; //ms
    var theta = 0;
    var pendulumLength = 250;
    var pendulumWidth = 10;
    var rotationPointX = canvas.width / 2;
    var rotationPointY = 100;
    
    anim.setDrawStage(function() {
        //update
        theta = (amplitude * Math.sin((2 * Math.PI * this.getTime()) / period)) + Math.PI / 2;
        
        //clear
        this.clear();
        
        //draw top circle
        context.beginPath();
        context.arc(rotationPointX , rotationPointY, 15, 0, 2 * Math.PI, false);
        context.fillStyle = "#888";
        context.fill();
        
        //draw top inner circle
        context.beginPath();
        context.arc(rotationPointX, rotationPointY, 10, 0, 2, Math.PI, false);
        context.fillStyle = "black";
        context.fill();
        
        //draw shaft
        context.beginPath();
        var endPointX = rotationPointX + (pendulumLength * Math.cos(theta));
        var endPointY = rotationPointY + (pendulumLength * Math.sin(theta));
        context.beginPath();
        context.moveTo(rotationPointX, rotationPointY);
        context.lineTo(endPointX, endPointY);
        context.lineWidth = pendulumWidth;
        context.lineCap = "round";
        context.strokeStyle = "#555";
        context.stroke();
        
        //draw bottom circle
        context.beginPath();
        context.arc(endPointX, endPointY, 40, 0, 2 * Math.PI, false);
        var grd = context.createLinearGradient(endPointX - 50, endPointY - 50, endPointX + 50, endPointY + 50);
        
        grd.addColorStop(0, "#0000ff");
        grd.addColorStop(1, "#00ff00");
        context.fillStyle = grd;
        context.fill();
        
    });

    anim.start();
};