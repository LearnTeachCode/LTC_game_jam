const bootState = {};

bootState.init = (data) => {
    data = typeof data === "undefined" ? config.boot : data;
    bootState.gameTitle = config.default.gameInformation.title;
    bootState.bootString = data.bootString || config.boot.bootString;
    bootState.gametextBootString;
    bootState.userData;
}

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
        newDataText = newDataText.substring(0, newDataText.length - 1);
    }
    return newDataText;
}

bootState.setUserData = () => {
    let data = {};
    data['device']    = bootState.getUserDevice();
    data['browser']   = bootState.getUserBrowser();
    data['audiotype'] = bootState.getUserAudioType();
    bootState.userData = data;
    return data;
}

// updates the "booting up..." string
bootState.updateBootText = () => {
    if(bootState.gametextBootString != null){
        bootState.bootString += '.';
        bootState.gametextBootString.setText(bootState.bootString);
    }
    else{
        bootState.bootString = 'Booting up';
        bootState.gametextBootString = game.add.text(0, 250, bootState.bootString, {font: '30px Courier', fill: '#fff'});
    }
    return bootState.gametextBootString;
}

bootState.startState = () => {
    //Initial Load State
    game.state.start('load');
}

bootState.create = () => {
    game.add.text(0, 150, 'Thanks for playing', {font: '30px Courier', fill: '#fff'});
    game.add.text(0, 200, bootState.gameTitle, {font: '30px Courier', fill: '#fff'});
    bootState.updateBootText();

    // animate "booting..." string
    let waitTime = 3;   // how much wait time in seconds
    let repeatNum = waitTime;
    game.time.events.repeat(Phaser.Timer.SECOND/waitTime, repeatNum, bootState.updateBootText, this);

    // retrieve device info and store into userData map (might be located in stateManager.js)
    bootState.setUserData();

    // run load state after boot string sequence
    //game.time.events.repeat(Phaser.Timer.SECOND*waitTime, 1, bootState.startState, this);

    bootState.startState();
}
