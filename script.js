var canvas = document.getElementById('example');
var ctx = canvas.getContext('2d');

// Холст
canvas.width = 800;
canvas.height = 600;

//цвет
    var colorBox = "#ff0000"
    


function createUpSide(positionX, positionY, sizeX, sizeY,color) {
    ctx.fillStyle =color;
    ctx.beginPath();
        ctx.moveTo(positionX, positionY);
        ctx.lineTo(positionX+sizeX, positionY-sizeX+sizeY/2);
        ctx.lineTo(positionX+sizeX+sizeY, positionY-sizeX+sizeY);
        ctx.lineTo(positionX+sizeY, positionY+sizeY-sizeY/2);
        ctx.lineTo(positionX,positionY);
        ctx.fill();
}
function createRightSide(positionX,positionY, sizeX, sizeY, sizeL,color) {
    ctx.fillStyle =color;
    ctx.beginPath();
    ctx.moveTo(positionX+sizeY, positionY+sizeY/2);
    ctx.lineTo(positionX+sizeX+sizeY, positionY-sizeX+sizeY);
    ctx.lineTo(positionX+sizeX+sizeY, positionY-sizeX+sizeY+sizeL);
    ctx.lineTo(positionX+sizeY, positionY+sizeY/2+sizeL);
    ctx.lineTo(positionX+sizeY, positionY+sizeY/2);
    ctx.fill();
}

function createFrontSide(positionX, positionY, sizeX, sizeY, sizeL,color) {
    ctx.fillStyle =color;
    ctx.beginPath();
    ctx.moveTo(positionX, positionY);
    ctx.lineTo(positionX+sizeY, positionY+sizeY/2);
    ctx.lineTo(positionX+sizeY, positionY+sizeY/2+sizeL);
    ctx.lineTo(positionX, positionY+sizeL);
    ctx.lineTo(positionX, positionY);
    ctx.fill();
}

function getRandomNumber (a,b) {
    return Math.round(Math.random() * (b-a)+a);

}
function getRandomColor () {
    var red = getRandomNumber(0,255);
    var green = getRandomNumber(0,255);
    var blue = getRandomNumber(0,255);
    return "rgb(" +red +","+green + "," + blue + ")"
}

// var colorsR = getRandomNumber(0,255)


function createIsometricBox(positionX, positionY, sizeX, sizeY, sizeL,color) {

    //createUpSide(positionX, positionY, sizeX, sizeY, color);
    createUpSide(positionX, positionY, sizeX, sizeY, getRandomColor());
   // createRightSide(positionX, positionY, sizeX, sizeY, sizeL, color);
    createRightSide(positionX, positionY, sizeX, sizeY, sizeL, getRandomColor());
    createFrontSide(positionX, positionY, sizeX, sizeY, sizeL, getRandomColor());

}



function clearArtboard () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}



function createRandomIsometricBox () {
    var positionX = getRandomNumber(0, canvas.width / 2);
    var positionY = getRandomNumber(0, canvas.height / 2);
    var sizeX = getRandomNumber(0, canvas.width / 3);
    var sizeY = getRandomNumber(0, canvas.width / 3);
    var sizeL = getRandomNumber(0, canvas.height / 3);
    createIsometricBox (positionX, positionY, sizeX, sizeY, sizeL, colorBox);
    console.log(positionX, positionY, sizeX, sizeY, sizeL);
}


function newComposition() {
    clearArtboard();
    //createRandomIsometricBox();
    for (var i = 0; i < 1; i++) {
        setInterval(createRandomIsometricBox, 100);
    }

    //createIsometricBox(100,100,100,100,120);
}

newComposition();


