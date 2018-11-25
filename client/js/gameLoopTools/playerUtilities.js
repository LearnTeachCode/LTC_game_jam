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
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        player.x -= playerSpeed;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        player.x += playerSpeed;
    }
}