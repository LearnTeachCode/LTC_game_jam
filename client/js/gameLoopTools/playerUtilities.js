const playerUtilities = {};

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