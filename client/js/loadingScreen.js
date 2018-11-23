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
loadingScreenState.textObject;

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
loadingScreenState.endMusic = () => {
    loadingScreenState.bgm.stop();
    return loadingScreenState.bgm.isPlaying;
}

/**
 * loadingScreenState.changeState moves onto next state
 * params: None
 * return: None
 */
loadingScreenState.changeState = () => {
    loadingScreenState.bgm.stop();  // stop the music
    game.state.start('gameLoop');
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

    // setup screen text
    loadingScreenState.style = { font: "65px Arial", fill: "#ff0044", align: "center" };
    loadingScreenState.textObject = game.add.text(game.world.centerX, game.world.centerY, "Click to Start", loadingScreenState.style);
    loadingScreenState.textObject.anchor.set(0.5);
    loadingScreenState.textObject.alpha = 0.1;
    game.add.tween(loadingScreenState.textObject).to( { alpha: 1 }, 2000, "Linear", true);

    // setup music and fade in music
    loadingScreenState.bgm = game.add.audio(config.loadingScreen.bgm.label);
    loadingScreenState.bgm.onDecoded.add(loadingScreenState.startMusic, this);

    // setup user controls
    game.input.onDown.add(loadingScreenState.changeState, this);
}

/**
 * loadingScreenState.render lets the setup components perform their functionalities
 * params: None
 * return: None
 */
loadingScreenState.render = () => {
    //game.debug.soundInfo(loadingScreenState.bgm, 20, 32);
}

