var canvas = new fabric.Canvas('myCanvas');

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

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(img) {
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

window.addEventListener("keydown", keyDown);

function keyDown(e) {
    key = e.keyCode;

    if (e.shiftKey == true && key == '77') {
        console.log("mshift");
        partW = partW + 10;
        partH = partH + 10;
        document.getElementById("myW").innerHTML = partW;
        document.getElementById("myH").innerHTML = partH;
    }

    if (e.shiftKey == true && key == '78') {
        console.log("mshift");
        partW = partW - 10;
        partH = partH - 10;
        document.getElementById("myW").innerHTML = partW;
        document.getElementById("myH").innerHTML = partH;
    }

    if (key == '84') {
        newImage('thor_face.png');
        console.log("t");
    }

    if (key == '89') {
        newImage('hulkd_body.png');
        console.log("y");
    }

    if (key == '85') {
        newImage('cap-leftArm.png');
        console.log("u");
    }

    if (key == '73') {
        newImage('ironman_right_hand.png');
        console.log("i");
    }

    if (key == '79') {
        newImage('spiderman_legs.png');
        console.log("o");
    }

    if (key == '87') {
        up();
        console.log("up");
    }

    if (key == '83') {
        down();
        console.log("down");
    }

    if (key == '68') {
        right();
        console.log("right");
    }

    if (key == '65') {
        left();
        console.log("left");
    }

}