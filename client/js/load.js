/**
 * loadState plays animation and tune while player waits for game loop
 */

let loadState = {};

loadState = {
    init: (data) => {
        data = typeof data === "undefined" ? { loadState: {} } : data;
        loadState.font = data.font || config.default.loader.font;
        loadState.fontFill = data.fontFill || config.default.loader.fontFill;
        loadState.fontAlign = data.fontAlign || config.default.loader.fontAlign;
        loadState.textUI;
        loadState.loadText = data.text || config.default.loader.text;
        loadState.loadText = "Loading...";
        loadState.loadValue = data.loadValue || config.default.loader.loadValue;
        loadState.bgmLabel = data.bgmLabel || config.default.loader.bgm.label;
        loadState.mp3File = data.mp3File || config.default.loader.bgm.mp3File;
        loadState.oggFile = data.oggFile || config.default.loader.bgm.oggFile;
        return loadState;
    },

    /**
     * loadState.createScreenImg generates the sprites for loading screen
     * params: None
     * return: Sprite object
     */
    createScreenImg: () => {
        // TODO
    },

    /**
     * loadState.startMusic fades in music at a given time
     * params: None
     * return: (boolean) True if music is playing, false otherwise
     */
    startMusic: (milliseconds = 4000) => {
        // have to hard code, else triggers a "nonfloat value" error for fadeIn
        loadState.bgm.fadeIn(4000);
        return loadState.bgm.isPlaying;
    },
    /**
     * loadState.stopMusic stops the music
     * params: None
     * return: (boolean) True if music is not playing, false otherwise
     */
    endMusic: (waitTime) => {
        loadState.bgm.fadeOut(waitTime);
        return loadState.bgm.isPlaying;
    },

    /**
     * loadState.endState shuts down current state before calling state change
     * params: None
     * return: (boolean) True if loadValue is 100%, false otherwise
     */
    endState: () => {
        if (loadState.loadValue >= 100){
            let waitTime = 2;   // delay by number of seconds
            loadState.endMusic(500*waitTime);  // stop the music
            // game.add.tween(loadState.startText).to( { alpha: 0 }, 1000 * waitTime, "Linear", true);
            game.time.events.repeat(Phaser.Timer.SECOND * waitTime, 1, loadState.changeState, this);
            return true;
        }
        return false;
    },

    /**
     * loadState.changeState moves onto next state
     * params: None
     * return: None
     */
    changeState: () => {
        game.state.start("menu");
    },

    /**
     * loadState.setupStartText prompts user to click
     * params: None
     * return: (Phaser.Text) loadState.loadText
     */
    setupLoadText: () => {
        // TODO setup loading text as assets/img/loadtext.png
        // setup loading text
        loadState.style = { font: loadState.font, fill: loadState.fontFill, align: loadState.fontAlign };
        let tempText = "Loading: " + loadState.loadValue + " %";
        loadState.textUI = game.add.text(game.world.centerX, game.world.centerY, tempText, loadState.style);
        loadState.textUI.anchor.set(0.5);
        return loadState.textUI;
    },

    /**
     * loadState.updateLoadCount
     * params: None
     * return: None
     */
    updateLoadText: () => {
        loadState.loadValue++;
        let tempText = "Loading: " + loadState.loadValue + " %";
        loadState.textUI.setText(tempText);
        if (loadState.loadValue >= 100)
            loadState.endState();
        return loadState.textUI;
    },
        
    /**
     * loadState.preload sets up the loading screen state
     * params: None
     * return: None
     */
    preload: () => {
        //Load your images, spritesheets, bitmaps...

        // Loader loads
        game.load.image(config.default.loader.loadScreen.spriteLabel, config.default.loader.loadScreen.spriteSrc);
        // Firefox doesn't support mp3 files, so use ogg
        game.load.audio(loadState.bgmLabel, [loadState.mp3File, loadState.oggFile]);

        // Menu loads
        game.load.image(config.menuState.background.imageKey, config.menuState.background.spriteSrc);
        game.load.image(config.menuState.title.imageKey, config.menuState.title.spriteSrc);
        game.load.image(config.menuState.startButton.imageKey, config.menuState.startButton.spriteSrc);
        game.load.image(config.menuState.startButtonDots.imageKey, config.menuState.startButtonDots.spriteSrc);

        // Game loop loads
        game.load.image("player", config.default.loader.playerImage);
        game.load.image(config.neutralMap.imgKey, config.neutralMap.imgSrc);

        // Game over loads
        game.load.image(config.gameOverState.restartButton.imageKey, config.gameOverState.restartButton.spriteSrc);
    },

    /**
    * loadState.create sets up the loading screen state
    * params: None
    * return: None
    */
    create: () => {
        // setup screen image
        game.stage.backgroundColor = "#000000";
        //loadState.getMapSpeed();
        loadState.createScreenImg();

        // simulate loading sequence, if loadValue is 100%, let user click to start game
        loadState.setupLoadText();
        let repeatCount = 100;
        game.time.events.repeat(Phaser.Timer.SECOND * 3 / repeatCount, repeatCount, loadState.updateLoadText, this);

        // setup music and fade in music
        loadState.bgm = game.add.audio(loadState.bgmLabel);
        loadState.bgm.onDecoded.add(loadState.startMusic, this);

        // setup user controls
        return "create";
    },
};
