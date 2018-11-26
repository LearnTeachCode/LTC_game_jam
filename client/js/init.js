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
    let width  =  Number(query.get("dWidth"))  || config.init.screenWidth;
    let height =  Number(query.get("dHeight")) || config.init.screenHeight;

    game._width = width;
    game._height = height;
}
