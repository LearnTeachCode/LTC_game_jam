/**
 * loadState plays animation and tune while player waits for game loop
 */

let loadState = {};

loadState = {
    init: (data) => {
        data = typeof data === "undefined" ? { loadState: {} } : data;
        loadState.loadValue = data.loadValue || config.loader.loadValue;
        loadState.background = data.background || config.loader.background;

        // images
        loadState.textSprite;      // sprite image placeholder
        loadState.screenSprite;    // sprite image placeholder
        loadState.textImgLabel = data.textImgLabel || config.loader.loadText.spriteLabel;
        loadState.textImgSrc = data.textImgSrc || config.loader.loadText.src;
        loadState.textImgX = data.textImgX || config.loader.loadText.xPosition;
        loadState.textImgY = data.textImgY || config.loader.loadText.yPosition;
        loadState.screenImgLabel = data.screenImgLabel || config.loader.loadScreen.spriteLabel;
        loadState.screenImgSrc = data.screenImgSrc || config.loader.loadScreen.src;
        loadState.screenImgX = data.screenImgX || config.loader.loadScreen.xPosition;
        loadState.screenImgY = data.screenImgY || config.loader.loadScreen.yPosition;

        // audio
        loadState.bgmLabel = data.bgmLabel || config.loader.bgm.label;
        loadState.mp3 = data.mp3 || config.loader.bgm.mp3;
        loadState.ogg = data.ogg || config.loader.bgm.ogg;
        return loadState;
    },

    /**
     * loadState.createScreenImg generates the sprites for loading screen
     * params: None
     * return: Sprite object
     */
    createScreenImg: () => {
        let tempScreenImg = game.add.sprite(loadState.screenImgX, game.world.centerY/2, loadState.screenImgLabel);
        let tempTextImg = game.add.sprite(loadState.textImgX, loadState.textImgY, loadState.textImgLabel);
        // hide sprites initially
        tempScreenImg.alpha = 0;
        tempTextImg.alpha = 0;

        // ensure map fits on screen
        let scaleMapValue = config.init.screenWidth / tempScreenImg.width;
        tempScreenImg.scale.setTo(scaleMapValue);
        loadState.screenSprite = tempScreenImg;

        scaleMapValue = config.init.screenWidth / tempTextImg.width;
        tempTextImg.scale.setTo(scaleMapValue);
        loadState.textSprite = tempTextImg;
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
        const theGameIsDoneLoading = loadState.loadValue >= 100
        if (theGameIsDoneLoading){
            let waitTime = 2;   // delay by number of seconds
            loadState.endMusic(500*waitTime);  // stop the music
            // game.add.tween(loadState.startText).to( { alpha: 0 }, 1000 * waitTime, "Linear", true);
            game.time.events.repeat(Phaser.Timer.SECOND * waitTime, 1, loadState.changeState, this);
        }
        return theGameIsDoneLoading;
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
     * loadState.updateLoadCount
     * params: None
     * return: None
     */
    updateLoadImgs: () => {
        loadState.loadValue++;

        let tempAlpha = loadState.loadValue / 100;
        loadState.screenSprite.alpha = tempAlpha;
        loadState.textSprite.alpha = tempAlpha;
        //loadState.screenSprite.setTo({alpha: tempAlpha});
        //game.add.tween(loadState.screenSprite).to( { alpha: loadState.loadValue }, 0, "Linear", true);
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
        game.load.image(loadState.screenImgLabel, loadState.screenImgSrc);
        game.load.image(loadState.textImgLabel, loadState.textImgSrc);
        // Firefox doesn't support mp3 files, so use ogg
        game.load.audio(loadState.bgmLabel, [loadState.mp3, loadState.ogg]);

        // Menu loads
        game.load.image(config.menuState.background.key, config.menuState.background.src);
        game.load.image(config.menuState.background2.key, config.menuState.background2.src);
        game.load.image(config.menuState.title.key, config.menuState.title.src);
        game.load.image(config.menuState.startButton.key, config.menuState.startButton.src);
        game.load.image(config.menuState.startButtonDots.key, config.menuState.startButtonDots.src);

        // Game loop loads
        game.load.image(config.loader.playerImage.key, config.loader.playerImage.src);
        game.load.image(config.loader.mapImage.key,    config.loader.mapImage.src);
        game.load.image(config.loader.placeHolder.key, config.loader.placeHolder.src);
        game.load.image(config.default.blocks.quarter.key, config.default.blocks.quarter.src);
        game.load.image(config.default.colorPickup.key, config.default.colorPickup.src);
        game.load.image(config.default.neutralMap.key, config.default.neutralMap.src);

        // Game over loads
        game.load.image(config.gameOverState.restartButton.key, config.gameOverState.restartButton.src);

        // score texts
        game.load.image(config.default.score.sprites.scoreText.key, config.default.score.sprites.scoreText.src);
        game.load.image(config.default.score.sprites.textNum0.key, config.default.score.sprites.textNum0.src);
        game.load.image(config.default.score.sprites.textNum1.key, config.default.score.sprites.textNum1.src);
        game.load.image(config.default.score.sprites.textNum2.key, config.default.score.sprites.textNum2.src);
        game.load.image(config.default.score.sprites.textNum3.key, config.default.score.sprites.textNum3.src);
        game.load.image(config.default.score.sprites.textNum4.key, config.default.score.sprites.textNum4.src);
        game.load.image(config.default.score.sprites.textNum5.key, config.default.score.sprites.textNum5.src);
        game.load.image(config.default.score.sprites.textNum6.key, config.default.score.sprites.textNum6.src);
        game.load.image(config.default.score.sprites.textNum7.key, config.default.score.sprites.textNum7.src);
        game.load.image(config.default.score.sprites.textNum8.key, config.default.score.sprites.textNum8.src);
        game.load.image(config.default.score.sprites.textNum9.key, config.default.score.sprites.textNum9.src);
    },

    /**
    * loadState.create sets up the loading screen state
    * params: None
    * return: None
    */
    create: () => {
        // setup screen image
        game.stage.backgroundColor = loadState.background;

        loadState.changeState();    // skip all this fake loading screen stuff lol

        //loadState.getMapSpeed();
        loadState.createScreenImg();

        // simulate loading sequence, if loadValue is 100%, end scene
        let repeatCount = 100;
        game.time.events.repeat(Phaser.Timer.SECOND*3/repeatCount, repeatCount, loadState.updateLoadImgs, this);

        // setup music and fade in music
        loadState.bgm = game.add.audio(loadState.bgmLabel);
        loadState.bgm.onDecoded.add(loadState.startMusic, this);

        return "create";
    },
};
