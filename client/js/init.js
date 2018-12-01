/*
For Fullscreen put this code:
var w = window.innerWidth * window.devicePixelRatio,
    h = window.innerHeight * window.devicePixelRatio;
*/

const tempDebug = {debug:{}};


var game = new Phaser.Game(
    config.init.screenWidth,
    config.init.screenHeight,
    Phaser.CANVAS,
    'gameContainer'
);

//protected and none global!!
if (config.default.debug.isOn === true){
    let query  = new URLSearchParams(window.location.search);
    let width  = Number(query.get("dWidth"))  || config.init.screenWidth;
    let height = Number(query.get("dHeight")) || config.init.screenHeight;
    let mapV   = Number(query.get("dMapVelocity")) || 0;
    let intervals = Number(query.get("dIntervals")) || 0;

    if (mapV){
        config.default.settings.mapVelocity = mapV;
    }
    if (intervals){
        config.default.settings.increaseIntervals = intervals;
    }
    game._width = width;
    game._height = height;
}

//Player will able to contorl simple mode via query string
let simpleMode = Number(query.get("devModeSimple")) || 0;
if (simpleMode === 1){
    console.log("Simple Mode Activated!!");
    config.default.gameInformation.devModeSimple = simpleMode;
}
