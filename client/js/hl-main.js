
var w = 640, h = 480;
var neutral_map_asset = 'assets/img/boilerplate-logo.png'
var neutral_map_label = 'neutral-map'

var game = new Phaser.Game(w, h, Phaser.AUTO, 'gameContainer', { preload: preload, create: create });

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image(neutral_map_label, neutral_map_asset);

}

function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    var s = game.add.sprite(80, 0, neutral_map_label);

    s.rotation = 0.14;

}