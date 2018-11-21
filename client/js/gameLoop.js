// player data
var playerSpeed = 5;
var playerScore = 0;
var playerScoreText;

// controllers
var cursors;
var dCursors;   // developers' cursors

var gameLoop = {
    // game loop member variables ---------
    player: {
        sprite: {},
        playerSpeed : 50

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
        this.player.sprite = game.add.sprite(w/2, 3/4*h, 'player');
        this.player.sprite.anchor.setTo(0.5, 0.5);
        playerScoreText = game.add.text(0, 0, 'SCORE:', { font: 'bold ' + config.load.font, fill: config.load.fill });

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
        playerScoreText.setText("SCORE: " + playerScore++);

        // developer buttons, IHAX YUR GAMEZ!!
        if(DEBUG){
            if(dCursors.isDown(Phaser.KeyCode.OPEN_BRACKET))
                neutralMap.changeMapSpeed(-1);
            if(dCursors.isDown(Phaser.KeyCode.CLOSED_BRACKET))
                neutralMap.changeMapSpeed(1);
        }

    }
};
