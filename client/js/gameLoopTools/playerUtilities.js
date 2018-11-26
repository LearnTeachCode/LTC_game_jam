const playerUtilities = {};
playerUtilities.create = (player) => {
    game.physics.enable(player.sprite, Phaser.Physics.ARCADE);
    player.sprite.body.collideWorldBounds  = true;
    const spriteCenter = [0.5, 0.5];
    player.sprite.anchor.setTo(...spriteCenter);
};

playerUtilities.update = (player) => {
    playerUtilities.move(player, player.controlType);
};

playerUtilities.move = (player, type) => {
    let mouseType    = type === 0;
    let keyboardType = type === 1;
    let touchType    = type === 2;
    
    if (mouseType){
        playerUtilities.mouseMovement(player.sprite, player.speed);
    }
    else if(keyboardType){
        playerUtilities.keyboardMovement(player.sprite, player.speed);
    }
    //optimization note: this check should be 1st since users are more likely to be mobile
    else if (touchType){
        //playerUtilities.touchMovement(player, player.speed);
    }

    return type;
};
playerUtilities.mouseMovement = (player, playerSpeed) => {
    let movementVector = {
        x: game.input.x - player.x,
        y: game.input.y - player.y
    };
    let movementVectorMagnitude = Math.sqrt(
        Math.pow(movementVector.x, 2) +
        Math.pow(movementVector.y, 2));
    if (movementVectorMagnitude != 0) {
        if (movementVectorMagnitude > playerSpeed) {
            // normalize the vector
            movementVector.x /= movementVectorMagnitude;
            movementVector.y /= movementVectorMagnitude;
            // scale the vector to maximum speed
            movementVector.x *= playerSpeed;
            movementVector.y *= playerSpeed;
        }
        player.x += movementVector.x;
        player.y += movementVector.y;
    }
};

playerUtilities.keyboardMovement = (player, playerSpeed) => {
    //Taking advantage of coercion to implement keyboard control algorithm
    let xVelocityInput = (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) - game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) * playerSpeed;
    let yVelocityInput = (game.input.keyboard.isDown(Phaser.Keyboard.DOWN) - game.input.keyboard.isDown(Phaser.Keyboard.UP)) * playerSpeed;

    // Set diagonal effective speed equal to horizontal/vertical effective speed
    if (xVelocityInput != 0 && yVelocityInput != 0) {
        xVelocityInput *= Math.sqrt(0.5);
        yVelocityInput *= Math.sqrt(0.5);
    }

    player.x += xVelocityInput;
    player.y += yVelocityInput;
};