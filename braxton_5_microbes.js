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