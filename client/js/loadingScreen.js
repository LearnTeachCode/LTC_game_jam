/**
 * loadingScreenState plays animation and tune while player waits for game loop
 */

// neutral map variables
const loadingScreenState = {};
loadingScreenState.maps;
loadingScreenState.velocity = 120;
loadingScreenState.cursors;
loadingScreenState.bgm;
loadingScreenState.textStyle;
loadingScreenState.startText;
loadingScreenState.loadText;
loadingScreenState.loadValue;

/**
 * loadingScreenState.getMapSpeed reads the speed from config and gets the speed of moving parts
 * params: None
 * return: current map speed
 */
loadingScreenState.getMapSpeed = () => {
    if(config.loadingScreen.velocity && !isNaN(parseFloat(config.loadingScreen.velocity)))
        loadingScreenState.velocity = config.loadingScreen.velocity;
    return loadingScreenState.velocity;
}

/**
 * loadingScreenState.setMapSpeed
 * params: (float) velocity
 * return: (float) velocity of loading screen images
 */
loadingScreenState.setMapSpeed = (velocity) => {
    if(!isNaN(parseFloat(velocity)))
        loadingScreenState.velocity = velocity;
    return loadingScreenState.velocity;
}

/**
 * loadingScreenState.createMaps generates the sprites for loading screen
 * params: None
 * return: Sprite object
 */
loadingScreenState.createMaps = () => {
    // TODO
}

/**
 * loadingScreenState.startMusic fades in music at a given time
 * params: None
 * return: (boolean) True if music is playing, false otherwise
 */
loadingScreenState.startMusic = () => {
    loadingScreenState.bgm.fadeIn(4000);
    return loadingScreenState.bgm.isPlaying;
}

/**
 * loadingScreenState.stopMusic stops the music
 * params: None
 * return: (boolean) True if music is not playing, false otherwise
 */
loadingScreenState.endMusic = (waitTime) => {
    loadingScreenState.bgm.fadeOut(waitTime);
    return loadingScreenState.bgm.isPlaying;
}

/**
 * loadingScreenState.endState shuts down current state before calling state change
 * params: None
 * return: (boolean) True if loadValue is 100%, false otherwise
 */
loadingScreenState.endState = () => {
    if (loadingScreenState.loadValue >= 100){
        let waitTime = 2;   // delay by number of seconds
        loadingScreenState.endMusic(500*waitTime);  // stop the music
        game.add.tween(loadingScreenState.startText).to( { alpha: 0 }, 1000 * waitTime, "Linear", true);
        game.time.events.repeat(Phaser.Timer.SECOND * waitTime, 1, loadingScreenState.changeState, this);
        return true;
    }
    return false;
}

/**
 * loadingScreenState.changeState moves onto next state
 * params: None
 * return: None
 */
loadingScreenState.changeState = () => {
    game.state.start('gameLoop');
}

/**
 * loadingScreenState.updateLoadCount
 * params: None
 * return: None
 */
loadingScreenState.updateLoadText = () => {
    loadingScreenState.loadValue++;
    let tempText = "Loading: " + loadingScreenState.loadValue + " %";
    loadingScreenState.loadText.setText(tempText);
    if (loadingScreenState.loadValue >= 100)
        loadingScreenState.setupStartText();
    return loadingScreenState.loadText;
}

/**
 * loadingScreenState.setupStartText prompts user to click
 * params: None
 * return: (boolean) return true if startText is created, false otherwise
 */
loadingScreenState.setupStartText = () => {
    // setup screen text
    loadingScreenState.startText = game.add.text(game.world.centerX, game.world.centerY + 70, "Click to Start", loadingScreenState.style);
    loadingScreenState.startText.anchor.set(0.5);
    loadingScreenState.startText.alpha = 0.1;
    game.add.tween(loadingScreenState.startText).to( { alpha: 1 }, 500, "Linear", true);
    if (loadingScreenState.startText)
        return true;
    return false;
}    

/**
 * loadingScreenState.create sets up the loading screen state
 * params: None
 * return: None
 */
loadingScreenState.create = () => {
    // setup map
    game.stage.backgroundColor = '#000000';
    loadingScreenState.getMapSpeed();
    loadingScreenState.createMaps();

    // setup loading text
    loadingScreenState.style = { font: "65px Arial", fill: "#ff0044", align: "center" };
    loadingScreenState.loadValue = 0;
    let tempText = "Loading: " + loadingScreenState.loadValue + " %";
    loadingScreenState.loadText = game.add.text(game.world.centerX, game.world.centerY, tempText, loadingScreenState.style);
    loadingScreenState.loadText.anchor.set(0.5);

    // simulate loading assets, if loadValue is 100%, let user click to start game
    let repeatCount = 100;
    game.time.events.repeat(Phaser.Timer.SECOND * 3 / repeatCount, repeatCount, loadingScreenState.updateLoadText, this);

    // setup music and fade in music
    loadingScreenState.bgm = game.add.audio(config.loadingScreen.bgm.label);
    loadingScreenState.bgm.onDecoded.add(loadingScreenState.startMusic, this);

    // setup user controls
    game.input.onDown.add(loadingScreenState.endState, this);
}

/**
 * loadingScreenState.render lets the setup components perform their functionalities
 * params: None
 * return: None
 */
loadingScreenState.render = () => {
    //game.debug.soundInfo(loadingScreenState.bgm, 20, 32);
}

