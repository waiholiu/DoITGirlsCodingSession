
window.onload = function () {

    canv = document.getElementById("gc");

    ctx = canv.getContext("2d");

    document.addEventListener("keydown", keyPush);

    setInterval(game, 1000 / 15);

}

playerX = playerY = 10;

gridSize = 20;
tileCount = 20;

appleX = appleY = 15;

xVelocity = yVelocity = 0;

trail = [];

tailLength = 5;

function game() {

    playerX += xVelocity;

    playerY += yVelocity;

    if (playerX < 0) {

        playerX = tileCount - 1;

    }

    if (playerX > tileCount - 1) {

        playerX = 0;

    }

    if (playerY < 0) {

        playerY = tileCount - 1;


    }

    if (playerY > tileCount - 1) {

        playerY = 0;

    }

    ctx.fillStyle = "black";

    ctx.fillRect(0, 0, canv.width, canv.height);



    ctx.fillStyle = "lime";

    for (var i = 0; i < trail.length; i++) {

        ctx.fillRect(trail[i].x * gridSize, trail[i].y * gridSize, gridSize - 2, gridSize - 2);

        if (trail[i].x == playerX && trail[i].y == playerY) {

            tailLength = 5;

        }

    }

    trail.push({ x: playerX, y: playerY });

    while (trail.length > tailLength) {

        trail.shift();

    }



    if (appleX == playerX && appleY == playerY) {

        tailLength++;

        appleX = Math.floor(Math.random() * tileCount);

        appleY = Math.floor(Math.random() * tileCount);

    }

    ctx.fillStyle = "red";

    ctx.fillRect(appleX * gridSize, appleY * gridSize, gridSize - 2, gridSize - 2);

    // Get the variables area
    var variablesArea = document.getElementById("variables");

    // Output the variables
    variablesArea.innerHTML = 
        "Player X: " + playerX + "<br>" +
        "Player Y: " + playerY + "<br>" +
        "Grid Size: " + gridSize + "<br>" +
        "Tile Count: " + tileCount + "<br>" +
        "Apple X: " + appleX + "<br>" +
        "Apple Y: " + appleY + "<br>" +
        "X Velocity: " + xVelocity + "<br>" +
        "Y Velocity: " + yVelocity + "<br>" +
        "Tail Length: " + tailLength;

}

function keyPush(evt) {

    switch (evt.keyCode) {

        case 37:

            xVelocity = -1; yVelocity = 0;

            break;

        case 38:

            xVelocity = 0; yVelocity = -1;

            break;

        case 39:

            xVelocity = 1; yVelocity = 0;

            break;

        case 40:

            xVelocity = 0; yVelocity = 1;

            break;

    }

}