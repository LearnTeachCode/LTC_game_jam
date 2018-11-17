var w = 640, h = 480;

var neutral_map_asset = 'assets/img/boilerplate-logo.png';
var neutral_map_label = 'neutral-map';
  
/*
For Fullscreen put this code:
var w = window.innerWidth * window.devicePixelRatio,
    h = window.innerHeight * window.devicePixelRatio;
*/

var game = new Phaser.Game(w, h, Phaser.AUTO, 'gameContainer');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('gameLoop', gameLoop);
game.state.add('end', gameOverState);

game.state.start('boot');