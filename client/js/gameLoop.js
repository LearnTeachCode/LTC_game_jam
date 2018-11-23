//initiliaze gameLoop 1st so it functions as a namespace
var gameLoop = {};
gameLoop.init = (data) => {
    gameLoop.player  = data.player   || config.default.player;
    gameLoop.score   = data.score    || config.default.score;
    gameLoop._width  = data.width    || config.init.screenWidth;
    gameLoop._height = data.height   || config.init.screenHeight;
    gameLoop.xStartRegion = data.xStartRegion || config.gameLoop.xStartRegion;
    gameLoop.yStartRegion = data.yStartRegion || config.gameLoop.yStartRegion;
    gameLoop.difficulty   = data.difficulty || 1;
    if (data.debug && data.debug.isOn === true){
        gameLoop.debugMode = data.debug.isOn;
        gameLoop.debug = data.debug;
    }
    else {
        gameLoop.debugMode = false;
    }
}
gameLoop = {

    mouseMovement: function (player, playerSpeed) {
        let cursorDistanceFromPlayer = game.input.x - player.x;
        let intendedMoveDirection = Math.sign(cursorDistanceFromPlayer);
        let playerMovementDelta = cursorDistanceFromPlayer;
        if (Math.abs(cursorDistanceFromPlayer) > playerSpeed)
            playerMovementDelta = intendedMoveDirection * playerSpeed;
        player.x += playerMovementDelta;
    },

    keyboardMovement: function (player, playerSpeed) {
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            player.x -= playerSpeed;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            player.x += playerSpeed;
        }
    },

    // phaser methods -------------------------

    create: function () {
        neutralMap.create();    // setup neutral map sprites
        let playerStartData = [
            gameLoop._width  * gameLoop.xStartRegion,
            gameLoop._height * gamegameLoop.yStartRegion,
            gameLoop.player.imageKey
        ];
        // setup player
        gameLoop.player.sprite = game.add.sprite(...playerStartData);
        //1st is x, 2nd is Y!
        const spriteCenter = [0.5, 0.5];
        gameLoop.player.sprite.anchor.setTo(...spriteCenter);

        let gameScoreData = [
            gameLoop.score.x,
            gameLoop.score.y,
            gameLoop.score.text,
            gameLoop.score.style
        ];
        gameLoop.score.interface = game.add.text(...gameScoreData);
        gameLoop.debug.controls  = game.input.keyboard;
    },
    
    update: function(){
        neutralMap.updateMap();    // update neutral map states
        //updatePlayer(player, playerSpeed);
        gameLoop.mouseMovement(gameLoop.player.sprite, gameLoop.player.speed);
        gameLoop.keybaordMovement(gameLoop.player.sprite, gameLoop.player.speed);
        gameLoop.score.amount += gameLoop.score.bonus1;

        // update score and text
        gameLoop.score.interface.setText(gameLoop.score.text + gameLoop.score.amount);

        if(gameLoop.debugMode){
            let upScrollCheat   = gameLoop.debug.controls.isDown(Phaser.KeyCode.OPEN_BRACKET);
            let downScrollCheat = gameLoop.debug.controls.isDown(Phaser.KeyCode.CLOSED_BRACKET);
            let gameOverCheat   = gameLoop.debug.controls.isDown(Phaser.KeyCode.SPACEBAR);

            upScrollCheat   ? neutralMap.changeMapSpeed(-gameLoop.difficulty) : -1;
            downScrollCheat ? neutralMap.changeMapSpeed(gameLoop.difficulty)  : -1;
            gameOverCheat   ? game.state.start("end") : -1;
        }

    }
};
