const playerUtilities = {};

playerUtilities.mouseMovement = (player, playerSpeed) => {
    let cursorDistanceFromPlayer = game.input.x - player.x;
    let intendedMoveDirection = Math.sign(cursorDistanceFromPlayer);
    let playerMovementDelta = cursorDistanceFromPlayer;
    if (Math.abs(cursorDistanceFromPlayer) > playerSpeed)
        playerMovementDelta = intendedMoveDirection * playerSpeed;
    player.x += playerMovementDelta;
};

playerUtilities.keyboardMovement = (player, playerSpeed) => {
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        player.x -= playerSpeed;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        player.x += playerSpeed;
    }
}