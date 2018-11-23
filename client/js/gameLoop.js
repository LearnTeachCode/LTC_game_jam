
// controllers
var cursors;

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

    playerMovementMethod: {},

    // game loop methods ----------------
    /**
     * Extension method to bring delegate function support into javascript
     * TODO: move this to an extension methods script
     */
    createDelegate: function (func, target) {
        return function() {
            return func.apply(target, arguments);
        };
    },

    mouseMovementStrategy: function (player, playerSpeed) {
        let cursorDistanceFromPlayer = game.input.x - player.x;
        let intendedMoveDirection = Math.sign(cursorDistanceFromPlayer);
        let playerMovementDelta = cursorDistanceFromPlayer;
        if (Math.abs(cursorDistanceFromPlayer) > playerSpeed)
            playerMovementDelta = intendedMoveDirection * playerSpeed;
        player.x += playerMovementDelta;
    },

    keyboardMovementStrategy: function (player, playerSpeed) {
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
        const spriteCenter = [0.5, 0.5]; //1st is x, 2nd is Y!
        gameLoop.player.sprite.anchor.setTo(...spriteCenter);

        let gameScoreData = [
            gameLoop.score.x,
            gameLoop.score.y,
            gameLoop.score.text,
            gameLoop.score.style
        ];
        gameLoop.score.interface = game.add.text(...gameScoreData);

        // create user input
        gameLoop.playerMovementMethod = gameLoop.createDelegate(gameLoop.mouseMovementStrategy);
        //cursors = game.input.keyboard.createCursorKeys();
        gameLoop.debug.controls = game.input.keyboard;
    },
    
    update: function(){
        neutralMap.updateMap();    // update neutral map states
        //updatePlayer(player, playerSpeed);
        gameLoop.playerMovementMethod(gameLoop.player.sprite, gameLoop.player.speed);

        gameLoop.score.amount += gameLoop.score.bonus1;

        // update score and text
        gameLoop.score.interface.setText(gameLoop.score.text + gameLoop.score.amount);

        if(gameLoop.debugMode){
            if(gameLoop.debug.controls.isDown(Phaser.KeyCode.OPEN_BRACKET))
                neutralMap.changeMapSpeed(-gameLoop.difficulty);
            if(gameLoop.debug.controls.isDown(Phaser.KeyCode.CLOSED_BRACKET))
                neutralMap.changeMapSpeed(gameLoop.difficulty);
        }

    }
};
