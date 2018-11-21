
// player data
var playerScore = 0;
var playerScoreText = config.player.playerScoreText;

// controllers
var cursors;
var dCursors;   // developers' cursors

var gameLoop = {
    // game loop member variables ---------
    player: {
        sprite: {},
        playerSpeed : config.player.playerSpeed,
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
    preload: function () {
        neutralMap.preload();   // load neutral map assets
    },

    create: function () {
        neutralMap.create();    // setup neutral map sprites

        // setup player
        this.player.sprite = game.add.sprite(config.screenWidth/2, config.screenHeight*3/4, 'player');
        this.player.sprite.anchor.setTo(0.5, 0.5);
        playerScoreText = game.add.text(0, 0, config.player.playerScoreText, { font: config.player.playerScoreFont, fill: config.player.playerScoreColor });

        // create user input
        this.playerMovementMethod = this.createDelegate(this.keyboardMovementStrategy);
        //cursors = game.input.keyboard.createCursorKeys();
        dCursors = game.input.keyboard;
    },
    
    update: function(){
        neutralMap.updateMap();    // update neutral map states
        //updatePlayer(player, playerSpeed);
        this.playerMovementMethod(this.player.sprite, this.player.playerSpeed);

        // update score and text
        playerScoreText.setText(config.player.playerScoreText + playerScore++);

        // developer buttons, IHAX YUR GAMEZ!!
        if(DEBUG){
            if(dCursors.isDown(Phaser.KeyCode.OPEN_BRACKET))
                neutralMap.changeMapSpeed(-1);
            if(dCursors.isDown(Phaser.KeyCode.CLOSED_BRACKET))
                neutralMap.changeMapSpeed(1);
        }

    }
};
