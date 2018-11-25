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
    let cursorXDistanceFromPlayer = game.input.x - player.x;
    let cursorYDistanceFromPlayer = game.input.y - player.y
    let velocityX = Math.sign(cursorXDistanceFromPlayer);
    let velocityY = Math.sign(cursorYDistanceFromPlayer);
    let playerMovementXDelta = cursorXDistanceFromPlayer;
    let playerMovementYDelta = cursorYDistanceFromPlayer;
    if (Math.abs(cursorXDistanceFromPlayer) > playerSpeed) {
        playerMovementXDelta = velocityX * playerSpeed;
    };
    if (Math.abs(cursorYDistanceFromPlayer) > playerSpeed) {
        playerMovementYDelta = velocityY * playerSpeed;
    };
    player.x += playerMovementXDelta;
    player.y += playerMovementYDelta;
    
};

playerUtilities.keyboardMovement = (player, playerSpeed) => {
 
    //Taking advantage of coercion to implement keyboard control algorithm
    let xVelocityInput = (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) - game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) * playerSpeed;
    let yVelocityInput = (game.input.keyboard.isDown(Phaser.Keyboard.DOWN) - game.input.keyboard.isDown(Phaser.Keyboard.UP)) * playerSpeed;
    
    player.x += xVelocityInput;
    player.y += yVelocityInput;
};