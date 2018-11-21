
// player data
var playerScore = 0;
var playerScoreTextImage;

// controllers
var cursors;
var dCursors;   // developers' cursors

var gameLoop = {
    // game loop member variables ---------
    player: {
        sprite: {},
        playerSpeed : config.player.speed,
    },

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
        let cursorDistance = game.input.x - player.x;
        player.x += (Math.abs(cursorDistance) > playerSpeed) ? playerSpeed * Math.sign(cursorDistance) : cursorDistance;
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

        // setup player
        this.player.sprite = game.add.sprite(config.init.screenWidth/2, config.init.screenHeight*3/4, 'player');
        this.player.sprite.anchor.setTo(0.5, 0.5);
        playerScoreTextImage = game.add.text(config.init.screenWidth/2, 5, config.player.score.text, { font: config.player.score.font, fill: config.player.score.color });

        // create user input
        this.playerMovementMethod = this.createDelegate(this.mouseMovementStrategy);
        //cursors = game.input.keyboard.createCursorKeys();
        dCursors = game.input.keyboard;
    },
    
    update: function(){
        neutralMap.updateMap();    // update neutral map states
        //updatePlayer(player, playerSpeed);
        this.playerMovementMethod(this.player.sprite, this.player.playerSpeed);

        // update score and text
        playerScoreTextImage.setText(config.player.score.text + playerScore++);

        // developer buttons, IHAX YUR GAMEZ!!
        if(DEBUG){
            if(dCursors.isDown(Phaser.KeyCode.OPEN_BRACKET))
                neutralMap.changeMapSpeed(-1);
            if(dCursors.isDown(Phaser.KeyCode.CLOSED_BRACKET))
                neutralMap.changeMapSpeed(1);
        }

    }
};
