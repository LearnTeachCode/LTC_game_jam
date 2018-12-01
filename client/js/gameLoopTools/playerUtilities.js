const playerUtilities = {};

/**
 * Creates player avatar
 * @param {Object} player - classless object
 * @return {Object} - returns object with character classes
 */
playerUtilities.create = (player) => {
    game.physics.enable(player.sprite, Phaser.Physics.ARCADE);
    player.sprite.body.collideWorldBounds  = true;
    const spriteCenter = [0.5, 0.5];
    player.sprite.anchor.setTo(...spriteCenter);
};

/**
 * 
 * @param {Object} player 
 */
playerUtilities.update = (player) => {
    playerUtilities.move(player, player.controlType);
};

/**
 * Determines the device the user is on and moves character accordingly
 * @param {Object} player - object representing the character
 * @param {Number} type - defines whether play is using a keyboard, mouse or phone
 * @returns {Number} - the type of device the user is playing on       
 */
playerUtilities.move = (player, type) => {
    let mouseType    = type === 0;
    let keyboardType = type === 1;
    
    if (mouseType) {
        playerUtilities.mouseMovement(player, player.speed);
    }

    // Keyboard movement is always listening, and will turn off mouse movement if any keyboard movement key is hit
    playerUtilities.keyboardMovement(player, player.speed);

    return type;
};

/**
* Moves the player in the direction of keyboard press.
* @param {Object} player - The player object.
* @param {Number} playerSpeed - The current speed of the player.
*/
playerUtilities.mouseMovement = (player, playerSpeed) => {
    let movementVector = {
        x: game.input.x - player.sprite.x,
        y: game.input.y - player.sprite.y
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
        player.sprite.x += movementVector.x;
        player.sprite.y += movementVector.y;
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

    player.sprite.x += xVelocityInput;
    player.sprite.y += yVelocityInput;

    // switch movement type to keyboard if a keyboard movement input is used
    if (xVelocityInput != 0 || yVelocityInput != 0)
        player.controlType = config.default.controls.keyboard;
};