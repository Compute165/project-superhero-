var canvas = new fabric.canvas('myCanvas')

var partH = 30;
var partW = 30;

var playerX = 20;
var playerY = 20;

var partObj = "";
var playerObj = "";

function playerDraw() {
    fabric.Image.fromURL('player.png', function(img) {
        playerObj = img;

        playerObj.scaleToWidth(50);
        playerObj.scaleToHeight(200);
        playerObj.set({
            top: playerY,
            left: playerX
        });

        canvas.add(playerObj);
    });
}

function newImage() {
    fabric.Image.fromURL('', function(img) {
        partObj = img;

        partObj.scaleToWidth(partW);
        partObj.scaleToHeight(partH);
        partObj.set({
            top: playerY,
            left: playerX
        });

        canvas.add(partObj);
    });
}