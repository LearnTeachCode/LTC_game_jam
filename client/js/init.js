var w = config.screenWidth, h = config.screenHeight;
var DEBUG = true;

/*
For Fullscreen put this code:
var w = window.innerWidth * window.devicePixelRatio,
    h = window.innerHeight * window.devicePixelRatio;
*/

var game = new Phaser.Game(w, h, Phaser.AUTO, 'gameContainer');