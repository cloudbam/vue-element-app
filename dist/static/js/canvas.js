 export default function(){

var width = window.innerWidth;
var height = window.innerHeight;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
canvas.width = width;
canvas.height = height;
ctx.translate(canvas.width / 2, canvas.height / 2);

var colors = ['114, 203, 219', '85, 19, 78', '160, 89, 107', '254, 195, 67', '239, 115, 81', '142, 220, 157'];

var layers = [];
var points = [];

var toggleMouse = false;

for (var i = 1; i <= 10; i++) {
    var objs = [];
    for (var j = 0; j < 20; j++) {
        var x = rand(-width, width);
        var y = rand(-height, height)
        var color = colors[rand(0, colors.length)];

        objs.push(new obj(new circle(new point(x, y), i * 3,
            'rgba(' + color + ', ' + (i) / 2 + ')'), drawCircle));
        points.push(new point(x, y));
    }
    layers.push(new layer(i / 5, objs));
}

var mouse = new point(0, 0);
var myParallax = new parallax(new point(1, 1), layers);
var param = 0;

var param = 0;

function animate() {
    clear();

    var fx = Math.sin(param * 4) * 200 + 150;
    if (toggleMouse) {
        myParallax.regPoint.x = mouse.x / 2;
        myParallax.regPoint.y = mouse.y / 4;
    } else {
        myParallax.regPoint.x = Math.cos(param) * fx;
        myParallax.regPoint.y = Math.sin(param) * fx;
        param += 0.01;
    }


    drawParallax(myParallax);
    requestAnimationFrame(animate);
}
animate();

function drawParallax(myParallax) {
    for (var i = 0; i < myParallax.layers.length; i++) {
        var layerZindex = myParallax.layers[i].zindex;
        var thisObjs = myParallax.layers[i].objs;
        var copyObjs = [];

        for (var j = 0; j < thisObjs.length; j++) {
            var objCopy = copy(thisObjs[j]);
            objCopy.struct.pos = translate(objCopy.struct.pos, myParallax.regPoint);
            objCopy.struct.pos = mult(objCopy.struct.pos, layerZindex);

            thisObjs[j].drawFunc(objCopy.struct);
        }
    }
}



/////////////

function translate(pointA, pointB) {
    return new point(pointA.x + pointB.x, pointA.y + pointB.y + 10);
}

function mult(pointA, n) {
    return new point(pointA.x * n, pointA.y * n);
}

function parallax(regPoint, layers) {
    this.regPoint = regPoint;
    this.layers = layers;
}

function layer(zindex, objs) {
    this.zindex = zindex;
    this.objs = objs;
}

function point(x, y) {
    this.x = x;
    this.y = y;
}

function copy(src) {
    // Deep copy hack
    var str = JSON.stringify(src);
    eval("var dst = " + str);
    return dst;
}

function rect(pos, width, height, color) {
    this.pos = pos;
    this.width = width;
    this.height = height;
    this.color = color;
}

function circle(pos, rad, color) {
    this.pos = pos;
    this.rad = rad;
    this.color = color;
}

function obj(struct, drawFunc) {
    this.struct = struct;
    this.drawFunc = drawFunc;
}

function complexObj(refPoint, objs) {
    this.refPoint = refPoint;
    this.objs = objs;
}

function clear() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    //ctx.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
    ctx.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
}

function iterate(objs, func) {
    for (var i = 0; i < objs.length; i++) {
        func(objs[i]);
    }
}

function dir(pointA, pointB) {
    return -Math.atan2(pointB.x - pointA.x, pointB.y - pointA.y) + Math.PI / 2;
}

function dist(pointA, pointB) {
    return Math.sqrt((pointA.x - pointB.x) * (pointA.x - pointB.x) + (pointA.y - pointB.y) * (pointA.y - pointB.y));
}

function rand(min, max) {
    var dist = max - min;
    return Math.floor(Math.random() * dist) + min;
}

function drawCircle(circle) {
    ctx.beginPath();
    ctx.fillStyle = circle.color || "#ff0000";
    ctx.arc(circle.pos.x, circle.pos.y, circle.rad, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
}

function drawRect(rect) {
    ctx.fillStyle = rect.color || "#ff0000";
    ctx.fillRect(rect.pos.x, rect.pos.y, rect.width, -rect.height);
}

function drawLine(pointA, pointB, size, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.beginPath();
    ctx.moveTo(pointA.x, pointA.y);
    ctx.lineTo(pointB.x, pointB.y);
    ctx.stroke();
    ctx.closePath();
}

canvas.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX - canvas.width / 2;
    mouse.y = e.clientY - canvas.height / 2;
});

canvas.addEventListener('mouseover', function(e) {
    toggleMouse = true;
});

canvas.addEventListener('mouseout', function(e) {
    toggleMouse = false;
});


// Curve

function mkCurve(curveForm) {
    var localTimeStep = 5;
    var curveRes = [];

    for (var localTime = 0; localTime <= 100; localTime += localTimeStep) {
        var myPointArr = curveForm;
        while (myPointArr.length > 1) {
            var updateArr = [];
            for (var i = 1; i < myPointArr.length; i++) {
                updateArr.push(getCurvePoint(myPointArr[i - 1], myPointArr[i], localTime));

                var color = "#00ffff";
                if (Math.abs(iAnim - i) < 5) {
                    color = "#FF0080";
                }
                if (curveRes.length == 2) {
                    drawLine(myPointArr[i - 1], myPointArr[i], 0.3, color);
                }
            }
            myPointArr = updateArr;
        }
        curveRes.push(myPointArr[0]);
    }
    iAnim = (iAnim + 1) % 50;

    return curveRes;
}

function drawLines(curveData, color, size) {
    for (var i = 1; i < curveData.length; i++) {
        drawLine(curveData[i - 1], curveData[i], size, color);
    }
}

} 