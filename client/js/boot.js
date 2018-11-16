var gameTitle = 'LTC_GameJam_Colors-thingy-stuff';

// displayBootText sets up a delay by given timer before displaying provided string
function displayBootText(gameText, newString, timer){
    setTimeout(function () {
        gameText.setText(newString);
    }, timer);
}

// Retrieve user data
function getUserData(){
    // var text4 = game.add.text(0, 300, '', {font: '30px Courier', fill: '#fff'});
    // var text5 = game.add.text(0, 350, '', {font: '30px Courier', fill: '#fff'});
    var newDataText = '';

    // get user device
    newDataText = (game.device.android) ? newDataText + 'android,': newDataText;
    newDataText = (game.device.iphone) ? newDataText + 'iphone,': newDataText;
    newDataText = (game.device.ipad) ? newDataText + 'ipad,': newDataText;
    newDataText = (game.device.windows) ? newDataText + 'windows,': newDataText;
    newDataText = (game.device.iOS) ? newDataText + 'iOS,': newDataText;
    newDataText = (game.device.linux) ? newDataText + 'linux,': newDataText;
    if(newDataText != ''){
        // remove last comma in newDataText
        newDataText = newDataText.substring(0, newDataText.length - 1);
        userData['device'] = newDataText;
    }

    // get user browser
    newDataText = '';
    newDataText = (game.device.chrome) ? newDataText + 'chrome,': newDataText;
    newDataText = (game.device.safari) ? newDataText + 'safari,': newDataText;
    newDataText = (game.device.firefox) ? newDataText + 'firefox,': newDataText;
    if(newDataText != ''){
        // remove last comma in newDataText
        newDataText = newDataText.substring(0, newDataText.length - 1);
        userData['browser'] = newDataText;
    }

    // check supported audio from user device
    newDataText = '';
    newDataText = (game.device.mp3) ? newDataText + 'mp3,': newDataText;
    newDataText = (game.device.wav) ? newDataText + 'wav,': newDataText;
    newDataText = (game.device.ogg) ? newDataText + 'ogg,': newDataText;
    if(newDataText != ''){
        // remove last comma in newDataText
        newDataText = newDataText.substring(0, newDataText.length - 1);
        userData['audiotype'] = newDataText;
    }
}
var bootState = {

    create: function () {
        var timerDelta = 500;

        var bootString = 'Booting up';
        var text1 = game.add.text(0, 150, 'Thanks for playing', {font: '30px Courier', fill: '#fff'});
        var text2 = game.add.text(0, 200, gameTitle, {font: '30px Courier', fill: '#fff'});
        var text3 = game.add.text(0, 250, bootString, {font: '30px Courier', fill: '#fff'});

        timer = 500;
        for(i = 1; i < 5; i++){
            timer += timerDelta;
            bootString += '.';
            displayBootText(text3, bootString, timer);
        }

        setTimeout(function(){
            getUserData();
        }, timer += timerDelta);

        // debug test
        if(DEBUG){
            setTimeout(function(){
                var text4 = game.add.text(0, 300, 'hello', {font: '30px Courier', fill: '#fff'});
                bootString ='';
                for (var i in userData){
                    bootString += userData[i] +',';
                }
                text4.setText(bootString);
            }, timer += timerDelta);
        }

        // move on to next state
        setTimeout(function () {
            
            // opening config file
            //var file = fopen('../config/ltc_config.txt')

            //Initial GameSystem (Arcade, P2, Ninja)
            game.physics.startSystem(Phaser.Physics.ARCADE);

            //Initial Load State
            game.state.start('load');
        }, timer += timerDelta);

    }
};
