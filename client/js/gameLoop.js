//initiliaze gameLoop 1st so it functions as a namespace
const spriteTest = () => {
    let playerStartData = [
        50,
        50,
        config.loader.placeHolder.key
    ];
    // setup player
    gameLoop.testBlock = game.add.sprite(...playerStartData);
    var blk = gameLoop.testBlock;
    game.physics.enable(blk, Phaser.Physics.ARCADE);
    blk.immovable = true;
    blk.scale.setTo(2,2);
};
let gameLoop = {};
gameLoop = {
    init: (data) => {
        data = typeof data === "undefined" ? {} : data;
        gameLoop.player  = data.player   || config.default.player;
        gameLoop.score   = data.score    || config.default.score;
        gameLoop.width  = data.width    || config.init.screenWidth;
        gameLoop.height = data.height   || config.init.screenHeight;
        gameLoop.xStartRegion = data.xStartRegion || config.gameLoop.xStartRegion;
        gameLoop.yStartRegion = data.yStartRegion || config.gameLoop.yStartRegion;
        gameLoop.difficulty   = data.difficulty || 1;
        gameLoop.player.controlType  = data.controlType || config.default.controls.mouse;
        if (data.debug && data.debug.isOn === true){
            gameLoop.debugMode = data.debug.isOn;
            gameLoop.debug = data.debug;
        }
        else {
            gameLoop.debugMode = false;
        }
    },
    // phaser default methods (subStates) -------------------------

    create: () => {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        neutralMap.create();    // setup neutral map sprites
        spriteTest(); //eanDebug get rid of this function when finished testing

        //setup player object
        let playerStartData = [
            gameLoop.width  * gameLoop.xStartRegion,
            gameLoop.height * gameLoop.yStartRegion,
            gameLoop.player.imageKey
        ];
        gameLoop.player.sprite = game.add.sprite(...playerStartData);
        playerUtilities.create(gameLoop.player);

        //setup score UI
        let gameScoreData = [
            gameLoop.score.x,
            gameLoop.score.y,
            gameLoop.score.text,
            gameLoop.score.style
        ];
        gameLoop.score.interface = game.add.text(...gameScoreData);
        if (gameLoop.debugMode === true) {
            gameLoop.debug.controls  = game.input.keyboard;
        }
    },
    
    update: () => {
        neutralMap.updateMap();    // update neutral map states[]
        playerUtilities.update(gameLoop.player);

        //gameLoop.score.amount += gameLoop.score.bonus1;

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
