//initiliaze gameLoop 1st so it functions as a namespace

let gameLoop = {};
gameLoop = {
    init: (data) => {
        data = typeof data === "undefined" ? {} : data;
        gameLoop.player  = data.player   || config.default.player;
        gameLoop.score   = data.score    || config.default.score;
        gameLoop.width   = data.width    || config.init.screenWidth;
        gameLoop.height  = data.height   || config.init.screenHeight;
        gameLoop.xStartRegion = data.xStartRegion || config.gameLoop.xStartRegion;
        gameLoop.yStartRegion = data.yStartRegion || config.gameLoop.yStartRegion;
        gameLoop.difficulty   = data.difficulty   || config.default.settings.difficulty;
        gameLoop.velocity     = data.velocity     || config.default.settings.mapVelocity;
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
        blockUtilities.init();
        //setup player object
        let playerStartData = [
            gameLoop.width  * gameLoop.xStartRegion,
            gameLoop.height * gameLoop.yStartRegion,
            gameLoop.player.key
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
        };

        gameLoop.difficultyIncrease = gameLoop.manageDifficulty();
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

            upScrollCheat   ? neutralMap.setMapSpeed(-gameLoop.difficulty) : -1;
            downScrollCheat ? neutralMap.setMapSpeed(gameLoop.difficulty)  : -1;
            gameOverCheat   ? game.state.start("end") : -1;
        }

    },

    //This will eventually be an isolated module
    manageDifficulty: () => {
        let data = config.default.difficultyModifiers[gameLoop.difficulty];
        let velocityIncreaser = () => {
            let atMaxDifficulty = gameLoop.velocity >= config.default.settings.maxMapVelocity
            if (atMaxDifficulty){
                gameLoop.velocity = config.default.settings.maxMapVelocity;
                return;
            };

            gameLoop.velocity *= data.velocityIncrease;
            neutralMap.setMapSpeed(gameLoop.velocity);
            //blockUtilities.setVelocity(gameLoop.velocity);

        };

        let intervalData = [velocityIncreaser, config.default.settings.difficultyInterval];
        let interval = setInterval(...intervalData);

        return interval;
    }
};
