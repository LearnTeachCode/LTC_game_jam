
// neutral map
var neutralMapAsset = 'assets/img/boilerplate-logo.png';
var neutralMapLabel = 'neutral-map';
var neutralMap;
var neutralMapSize;

// controllers
var cursors;

var gameLoop = {
    preload: function () {
        // load neutral map
        game.load.image(neutralMapLabel, neutralMapAsset);
    },

    create: function () {
        // create neutral map 
        neutralMap = game.add.sprite(0, 0, neutralMapLabel);
        neutralMapSize = neutralMap.width;  // get size of map to locate if left the map

        game.physics.arcade.enable(neutralMap);

        // create user input
        cursors = game.input.keyboard.createCursorKeys();
    },

    update: function(){
        // check if map image has gone passed the screen, if so, place map back to other side of screen
        if(neutralMap.body.x <= (0 - neutralMapSize)){
            neutralMap.body.x = w;
        }

        // map moves in negative direction to illustrate player is moving in positive direction
        neutralMap.body.velocity.x = -250;
    }
};
