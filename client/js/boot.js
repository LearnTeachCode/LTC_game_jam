const bootState = {};
console.log(game, "is the current game nameSpace")
bootState.gameTitle = 'LTC_GameJam_Colors-thingy-stuff';
// Retrieve user data
bootState.getUserDevice    = () => {
    let newDataText = '';
    newDataText = (game.device.android) ? newDataText + 'android,': newDataText;
    newDataText = (game.device.iphone) ? newDataText + 'iphone,': newDataText;
    newDataText = (game.device.ipad) ? newDataText + 'ipad,': newDataText;
    newDataText = (game.device.windows) ? newDataText + 'windows,': newDataText;
    newDataText = (game.device.iOS) ? newDataText + 'iOS,': newDataText;
    newDataText = (game.device.linux) ? newDataText + 'linux,': newDataText;

    if(newDataText != ''){
        // remove last comma in newDataText
        newDataText = newDataText.substring(0, newDataText.length - 1);
    }
    return newDataText;
}
bootState.getUserBrowser   = () => {
    let newDataText = '';
    newDataText = (game.device.chrome) ? newDataText + 'chrome,': newDataText;
    newDataText = (game.device.safari) ? newDataText + 'safari,': newDataText;
    newDataText = (game.device.firefox) ? newDataText + 'firefox,': newDataText;
    if(newDataText != ''){
        // remove last comma in newDataText
        newDataText = newDataText.substring(0, newDataText.length - 1);
    }
    return newDataText;
}
bootState.getUserAudioType = () =>{
    let newDataText = '';
    newDataText = (game.device.mp3) ? newDataText + 'mp3,': newDataText;
    newDataText = (game.device.wav) ? newDataText + 'wav,': newDataText;
    newDataText = (game.device.ogg) ? newDataText + 'ogg,': newDataText;
    if(newDataText != ''){
        // remove last comma in newDataText
        newDataText = newDataText.substring(0, newDataText.length - 1);
    }
    return newDataText;
}

/*
   From Ean: Hong, make sure all of our functions have an entry/exit point so we can make them testible
*/
bootState.setUserData = () => {
    let data = {};
    data['device']    = bootState.getUserDevice();
    data['browser']   = bootState.getUserBrowser();
    data['audiotype'] = bootState.getUserAudioType();

    return data;
}
/**
* Sets up a delay by given timer before displaying provided string
* @param {String} gameText The current display text that the boot state is showing.
* @param {String} newString The text that will come next in the boot state.
* @param {Number} timer Sets the delay before displaying the provided string.
* @return {Number}      A positive integer value which identifies the timer created by the call to setTimeout();.
* {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout }
*/

bootState.displayBootText = (gameText, newString, timer) => {
    const bootText = setTimeout(function () {
        gameText.setText(newString);
    }, timer);
    return bootText;
} 

bootState.userData = bootState.setUserData();

/**
 * @param {Number} timer delay time for the debugging state
 * @return {Number}      A positive integer value which identifies the timer created by the call to setTimeout();.
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout }
 */

// debug userData
bootState.debugBootState = (timer) => {
    if(DEBUG){
        const result = setTimeout(function(){
            var gametextDebugger = game.add.text(0, 300, 'hello', {font: '30px Courier', fill: '#fff'});
            bootString ='';
            let userData = bootState.userData;
            for (var i in userData){
                bootString += userData[i] +' ';
            }
            gametextDebugger.setText(bootString);
        }, timer);
        return result;
    }
}
bootState.startState = (stateName, timer) => {
    //From Ean: is there a reason for using a timer to delay game state?
    setTimeout(function () {
            
        // TODO: determine if writing to player's computer is something to move forward with
        // ignore for now
        //var file = fopen('../config/ltc_config.txt')

        //Initial GameSystem (Arcade, P2, Ninja)
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //Initial Load State
        game.state.start(stateName);
    }, timer);
}
bootState.create = () => {
    var timerDelta = 500;   // how much wait time to increment
    var bootString = 'Booting up';
    var gametextThankYou = game.add.text(0, 150, 'Thanks for playing', {font: '30px Courier', fill: '#fff'});
    var gametextGameTitle = game.add.text(0, 200, bootState.gameTitle, {font: '30px Courier', fill: '#fff'});
    var gametextBootString = game.add.text(0, 250, bootString, {font: '30px Courier', fill: '#fff'});

    // animate "booting..." string
    var timer = 500;
    for(i = 1; i < 5; i++){
        timer += timerDelta;
        bootString += '.';
        bootState.displayBootText(gametextBootString, bootString, timer);
    }

    // retrieve device info and store into userData map (might be located in stateManager.js)
    setTimeout(function(){
        bootState.setUserData();
    }, timer += timerDelta);

    if(DEBUG)
        bootState.debugBootState(timer += timerDelta);

    bootState.startState('load', timer += timerDelta);
};