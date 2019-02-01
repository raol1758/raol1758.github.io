function drawShapes()
{
    drawSky();
    drawSun();
    drawImage();
    drawLines();
    drawRectangles(); //LAYERS
    drawCircles();
    drawText();
}

function drawRectangles()
{
    //ties the <canvas> object from index.html 2 your js code
    var canvas = document.getElementById("myCanvas");
    //this next line is the most important
    var ctx = canvas.getContext("2d");
    //draw a rectangle
    ctx.fillStyle = "#006319";
    ctx.fillRect(0,400,500,100);

    ctx.fillStyle = "#dedfde";
    ctx.fillRect(0,400,500,20);
}

function drawCircles()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.lineWidth=2;
    ctx.strokeStyle="#dedfde";
    ctx.arc(100,170,40,0,Math.PI,true);
    ctx.fillStyle = "#006319";
    ctx.fill();
    ctx.stroke();

    //ctx.beginPath();
   // ctx.arc(200,350,100,0,180);
    //ctx.fillStyle = "#cc8779";
   // ctx.fill();
   // ctx.stroke();

    ctx.beginPath();
    ctx.arc(100,100,30,0,Math.PI,true);
    ctx.fillStyle = "#009217";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(100,250,50,0,Math.PI,true);
    ctx.fillStyle = "#004d16";
    ctx.fill();
    ctx.stroke();




    ctx.beginPath();
    ctx.arc(400,100,30,0,Math.PI,true);
    ctx.fillStyle = "#009217";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(400,180,50,0,Math.PI,true);
    ctx.fillStyle = "#006319";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(400,300,70,0,Math.PI,true);
    ctx.fillStyle = "#004d16";
    ctx.fill();
    ctx.stroke();



    ctx.beginPath();
    ctx.arc(25,40,20,0,Math.PI,true);
    ctx.fillStyle = "#aad198";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(25,100,30,0,Math.PI,true);
    ctx.fillStyle = "#54b257";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(25,180,50,0,Math.PI,true);
    ctx.fillStyle = "#597f5d";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(25,300,70,0,Math.PI,true);
    ctx.fillStyle = "#365e39";
    ctx.fill();
    ctx.stroke();
}

function drawLines()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath(); //w3schools for more info
    ctx.moveTo(25,10); //start location
    ctx.lineWidth=19;
    ctx.lineTo(25,500); //end location
    ctx.strokeStyle="#432609";
    ctx.stroke(); //paint it to the screen

    ctx.beginPath(); //w3schools for more info
    ctx.moveTo(100,50); //start location
    ctx.lineWidth=19;
    ctx.lineTo(100,500); //end location
    ctx.strokeStyle="#432609";
    ctx.stroke(); //paint it to the screen

    ctx.beginPath(); //w3schools for more info
    ctx.moveTo(400,50); //start location
    ctx.lineWidth=19;
    ctx.lineTo(400,500); //end location
    ctx.strokeStyle="#432609";
    ctx.stroke(); //paint it to the screen

    ctx.beginPath(); //w3schools for more info
    ctx.moveTo(190,350); //start location
    ctx.lineWidth=270;
    ctx.lineTo(310,500); //end location
    ctx.strokeStyle="#868286";
    ctx.stroke(); //paint it to the screen

    ctx.beginPath(); //w3schools for more info
    ctx.moveTo(290,270); //start location
    ctx.lineWidth=15;
    ctx.lineTo(327,330); //end location
    ctx.strokeStyle="#dedfde";
    ctx.stroke(); //paint it to the screen

    ctx.beginPath(); //w3schools for more info
    ctx.moveTo(295,270); //start location
    ctx.lineWidth=15;
    ctx.lineTo(278,330); //end location
    ctx.strokeStyle="#dedfde";
    ctx.stroke(); //paint it to the screen

    ctx.beginPath(); //w3schools for more info
    ctx.moveTo(300,270); //start location
    ctx.lineWidth=15;
    ctx.lineTo(238,330); //end location
    ctx.strokeStyle="#dedfde";
    ctx.stroke(); //paint it to the screen
}

function drawText()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle="#8187ff";
    ctx.font= "30px Arial";
    ctx.fillText("",200,300);
}

//draw an image dynamically so that it can be moved easily
var pic1 = new Image(); //create a new image object and attach it to a reference variable
pic1.src ="img/homeboyBOB.jpg";  //what is the source for your image object


function drawImage()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(pic1,350,190,60,60); //picture, x-coord, y-coord, height, width
}

function drawSky()
{
    //ties the <canvas> object from index.html 2 your js code
    var canvas = document.getElementById("myCanvas");
    //this next line is the most important
    var ctx = canvas.getContext("2d");
    //draw a rectangle
    ctx.fillStyle = "#59d0c6";
    ctx.fillRect(0,0,500,500);
}

function drawSun()
    {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.lineWidth=2;
        ctx.strokeStyle="#dfc233";
        ctx.arc(200,210,70,0,180);
        ctx.fillStyle = "#dadf36";
        ctx.fill();
        ctx.stroke();
    }


var a; //reference the animation function
var cX = 350;
var cY = 190;
var cW = 60;
var cH = 60;


function initialize()
{
    drawBackground();
    var ctx=document.getElementById("myCanvas").getContext("2d");

    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(pic1,cX,cY,cW,cH); //picture, x-coord, y-coord, height, width
}

function drawBackground()
{
    var ctx=document.getElementById("myCanvas").getContext("2d");
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#59d0c6";
    ctx.fillRect(0,0,500,500);

    drawSky();
    drawSun();
    //drawImage();
    drawLines();
    drawRectangles();
    drawCircles();
    drawText();
}

function animate()
{
    a=requestAnimationFrame(animate);
    drawBackground();
    moveHorizontal();
    checkX();
    checkY();
}

var moveX = 2;
var moveY = 2;

function moveHorizontal()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    cX = cX + moveX;
    cY = cY + moveY;
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(pic1,cX,cY,cW,cH); //picture, x-coord, y-coord, height, width
}

function checkX()
{
    if (cX > 0)
    {
        moveX = moveX * (-1);
    }
    if (cX < 450)
    {
        moveX = moveX * (-1);
    }
}

function checkY()
{
    if (cY > 350)
    {
        moveY = moveY * (-1);
    }
    if (cY < 0)
    {
        moveY = moveY * (-1);
    }
}

function startAnimation()
{
    animate();
}