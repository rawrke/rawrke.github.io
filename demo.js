var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ballRadius = 4;
x = 95;
y = 50;
dx = 2;
dy = 2;


function changeColor(){
    // console.log("Hello")
    var x = document.getElementById("p2");
    x.style.color = "cyan";
    x.innerHTML = "-Evan ;)";
}

// window.onload = function(){
//     var canvas = document.getElementById("myCanvas");
//     var ctx = canvas.getContext("2d");
//     ctx.fillStyle = "#FFFFFF";
//     ctx.beginPath();
//     ctx.arc(x, y, 4, 0, 2 * Math.PI);
//     ctx.fill();
// }

function drawCircle(){
    ctx.fillStyle = 'rgb(' + Math.min(255, x) + ', ' +
        Math.min(255, y) + ',' + Math.min(255, Math.abs(x-y)) + ')';
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

function draw(){
    drawCircle();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

setInterval(draw, 10);
