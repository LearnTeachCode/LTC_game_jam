
// display screen
var w = 640, h = 480;

// neutral map
var neutralMapAsset = 'assets/img/boilerplate-logo.png';
var neutralMapLabel = 'neutral-map';
var neutralMap;
var neutralMapSize;

// controllers
var cursors;

var game = new Phaser.Game(w, h, Phaser.AUTO, 'gameContainer', { preload: preload, create: create, update: update });

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image(neutralMapLabel, neutralMapAsset);

}

function create() {
    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen

    // create neutral map 
    neutralMap = game.add.sprite(0, 0, neutralMapLabel);
    neutralMapSize = neutralMap.width;  // get size of map to locate if left the map

    game.physics.arcade.enable(neutralMap);

    // create user input
    cursors = game.input.keyboard.createCursorKeys();

}

function update () {

    // check if map image has gone passed the screen, if so, place map back to other side of screen
    if(neutralMap.body.x <= (0 - neutralMapSize)){
        neutralMap.body.x = w;
    }

    // map moves in negative direction to illustrate player is moving in positive direction
    neutralMap.body.velocity.x = -250;

}
