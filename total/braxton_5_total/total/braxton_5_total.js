function getRandColor() {
    var colors = ["#14CC7C", "#3D9971", "#01FF00", "#FF40FF", "#9A14CC", "#00FF1A", "#19FFDB", "#FFC800", "#0011B2"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandThate() {
    return Math.random() * 10 * Math.PI;
}

function updateMicrobes(anim, microbes) {
    var canvas = anim.getCanvas();
    var angleVariance = 0.2;
    
    for (var i = 0; i < microbes.length; i++) {
        var microbe = microbes[i];
        var angles = microbe.angles;
        
        var numNewSegmentsPerFrame = Math.round(-0.18 * anim.getFps() + 11.8);
        
        for (var n = 0; n < numNewSegmentsPerFrame; n++) {
            if (angles.length == 0) {
                microbe.headX = canvas.width / 2;
                microbe.headY = canvas.height / 2;
                angles.push(getRandThate());
            }
            
            var headX = microbe.headX;
            var headY = microbe.headY;
            var headAngle = angles[angles.length - 1];
            
            var dist = anim.getTimeInterval() / (10 * numNewSegmentsPerFrame);
            var newHeadAngle = headAngle + ((angleVariance / 2) - Math.random() * angleVariance);
            var newHeadX = headX + dist * Math.cos(newHeadAngle);
            var newHeadY = headY + dist * Math.sin(newHeadAngle);
            
            if (newHeadX >= canvas.width || newHeadX <= 0 || newHeadY >= canvas.height || newHeadY <= 0) {
                newHeadAngle += Math.PI / 2;
                newHeadX = headX + dist * Math.cos(newHeadAngle);
                newHeadY = headY + dist * Math.sin(newHeadAngle);
            }
            
            microbe.headX = newHeadY;
            microbe.headY = newHeadY;
            angles.push(newHeadAngle);
            
            if (angles.length > 20) {
                angles.shift();
            }
        }
    }
}
function drawMicrobes(anim, microbes){
    var segmentLength = 6;
    var context = anim.getContext();
    
    for (var i = 0; i < microbes.length; i++) {
        var microbe = microbes[i];
        
        var angles = microbe.angles;
        context.beginPath();
        context.moveTo(microbe.headX, microbe.headY);
        
        var x = microbe.headX;
        var y = microbe.headY;
        
        for (var n = angles.length - 1; n >= 0; n--) {
            var angle = angles[n];
            
            x -= segmentLength * Math.cos(angle);
            y -= segmentLength * Math.sin(angle);
            context.lineTo(x, y);
        }
        
        context.lineWidth = 10;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.strokeStyle = microbe.color;
        context.stroke();
        context.rotate(Math.PI / 5)
    }
}

window.onload = function(){
    var anim = new Animation("myCanvas");
    var canvas = anim.getCanvas();
    var context = anim.getContext();
    
    var microbes = [];
    for (var n = 0; n < 250; n++) {
        microbes[n] = {
            headX: 0,
            headY: 0,
            angles: [],
            color: getRandColor()
        };
    }
    
    anim.setDrawStage(function(){
        updateMicrobes(this, microbes);
        
        this.clear();
        
        drawMicrobes(this, microbes);
    });
    
    anim.start();
};

function Gear(config) {
    this.x = config.x;
    this.y = config.y;
    this.outerRadius = config.outerRadius;
    this.innerRadius = config.innerRadius;
    this.holeRadius = config.holeRadius;
    this.numTeeth = config.numTeeth;
    this.theta = config.theta;
    this.thetaSpeed = config.thetaSpeed;
    this.lightColor = config.lightColor;
    this.darkColor = config.darkColor;
    this.clockwise = config.clockwise;
    this.midRadius = config.outerRadius - 10;
}

Gear.prototype.draw = function(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.theta);
    
    //draw gear teeth
    context.beginPath();
    //we can set the lineJoine property to bevel so that the tips
    //of the gear teeth are flat and don't come to a sharp point
    context.lineJoin = "bevel";
    
    //loop through the number of points to create the gear shape
    var numPoints = this.numTeeth * 2;
    for (var n = 0; n < numPoints; n++) {
        var radius = null;
        
        //draw tip of teeth on even iterations
        if (n % 2 == 0) {
            radius = this.outerRadius;
        }
        //draw teeth connection which lies soewhere between
        //the gear center and gear radius
        else {
            radius = this.innerRadius;
        }
        
        var theta = ((Math.PI * 2) / numPoints) * (n + 1);
        var x = (radius * Math.sin(theta));
        var y = (radius * Math.cos(theta));
        
        // if first iteration, use moveTo() to position
        //the drawing cursor
        if(n == 0) {
            context.moveTo(x, y);
        }
        // if any other iteration, use lineTo() to connect sub paths
        else {
           context.lineTo(x, y);
        }
    }
        
    context.closePath();         
    
    // define the line width and stroke color
    context.lineWidth = 5;
    context.strokeStyle = this.darkColor;
    context.stroke();
    
    //draw gear body
    context.beginPath();
    context.arc(0, 0, this.midRadius, 0, 2 * Math.PI, false);
    
    //create a linear gradient
    var grd = context.createLinearGradient(-1 * this.outerRadius / 2, -1 * this.outerRadius / 2, this.outerRadius / 2, this.outerRadius / 2);
    grd.addColorStop(0, this.lightColor);
    grd.addColorStop(1, this.darkColor);
    context.fillStyle = grd;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = this.darkColor;
    context.stroke();
    
    // draw gear hole
    context.beginPath();
    context.arc(0, 0, this.holeRadius, 0, 2 * Math.PI, false);
    context.fillStyle = "white";
    context.fill();
    context.strokeStyle = this.darkColor;
    context.stroke();
    context.restore();
};

window.onload = function(){
    var anim = new Animation("myCanvas1");
    var canvas = anim.getCanvas();
    var context = anim.getContext();
    
    var gears = [];
    
    // add blue gear
    gears.push(new Gear({
        x: 270,
        y: 105,
        outerRadius: 90,
        innerRadius: 50,
        holeRadius: 10,
        numTeeth: 24,
        theta: 0,
        thetaSpeed: 1 /1000,
        lightColor: "#B1CCFF",
        darkColor: "#3959CC",
        clockwise: false
    }));
    
    // add red gear
    gears.push(new Gear({
        x: 372,
        y: 190,
        outerRadius: 50,
        innerRadius: 15,
        holeRadius: 10,
        numTeeth: 12,
        theta: 0.14,
        thetaSpeed: 2 / 1000,
        lightColor: "#FF9E9D",
        darkColor: "#AD0825",
        clockwise: true
    }));
    
    //add orange gear
    gears.push(new Gear({
        x: 422,
        y: 142,
        outerRadius: 28,
        innerRadius: 5,
        holeRadius: 7,
        numTeeth: 6,
        theta: 0.35,
        thetaSpeed: 4/ 1000,
        lightColor: "#FFDD87",
        darkColor: "#D25D00",
        clockwise: false
    }));
    
    anim.setDrawStage(function() {
        // update
        for (var i = 0; i < gears.length; i++){
            var gear = gears[i];
            var thetaIncrement = gear.thetaSpeed * this.getTimeInterval();
            gear.theta += gear.clockwise ? thetaIncrement : -1 * thetaIncrement;
        }
        
        // clear
        this.clear();
        
        // draw
        for (var i = 0; i < gears.length; i++) {
            gears[i].draw(context);
        }
    });
    
    anim.start();
};

window.onload = function() {
    var anim = new Animation("myCanvas2");
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

window.onload = function(){
    var anim = new Animation("myCanvas3");
    var canvas = anim.getCanvas();
    var context = anim.getContext();
    
    var clockRadius = 75;
    
    anim.setDrawStage(function(){
        
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        
        hours = hours > 12 ? hours - 12 : hours;
        
        var hour = hours + minutes / 60;
        var minute = minutes + seconds / 60;
        
        this.clear();
        
        var context = anim.getContext();
        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        
        context.beginPath();
        context.arc(0, 0, clockRadius, 0, Math.PI * 2, true);
        
        var grd = context.createLinearGradient(-clockRadius, -clockRadius, clockRadius, clockRadius);
        grd.addColorStop(0, "#F8FCFF");
        grd.addColorStop(1, "#A1CCEE");
        context.fillStyle = grd;
        context.fill();
        
        context.font = "16pt Calibri";
        context.fillStyle = "#024F8C";
        context.textAlign = "center";
        context.textBaseline = "middle";
        for (var n = 1; n <= 12; n++) {
            var theta = (n - 3) * (Math.PI * 2) / 12;
            var x = clockRadius * 0.8 * Math.cos(theta);
            var y = clockRadius * 0.8 * Math.sin(theta);
            context.fillText(n, x, y);
        }
        
        context.save();
        
        context.shadowColor = "#bbbbbb";
        context.shadowBlur = 5;
        context.shadowOffsetX = 1;
        context.shadowOffsetY = 1;
        
        context.lineWidth = 3;
        context.strokeStyle = "#005EA8";
        context.stroke();
        
        context.restore();
        
        context.save();
        var theta = (hour - 3) * 2 * Math.PI / 12;
        context.rotate(theta);
        context.beginPath();
        context.moveTo(-10, -4);
        context.lineTo(-10, 4);
        context.lineTo(clockRadius * 0.6, 1);
        context.lineTo(clockRadius * 0.6, -1);
        context.fill();
        context.restore();
        
        context.save();
        var theta = (minute - 15) * 2 * Math.PI / 60;
        context.rotate(theta);
        context.beginPath();
        context.moveTo(-10, -3);
        context.lineTo(-10, 3);
        context.lineTo(clockRadius * 0.9, 1);
        context.lineTo(clockRadius * 0.9, -1);
        context.fill();
        context.restore();
        
        context.save();
        var theta = (seconds - 15) * 2 * Math.PI / 60;
        context.rotate(theta);
        context.beginPath();
        context.moveTo(-10, -2);
        context.lineTo(-10, 2);
        context.lineTo(clockRadius * 0.8, 1);
        context.lineTo(clockRadius * 0.8, -1);
        context.fillStyle = "red";
        context.fill();
        context.restore();
        
        context.restore();
    });
    
    anim.start();
};