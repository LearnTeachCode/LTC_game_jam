
// neutral map
var neutralMapAsset = 'assets/img/sample-neutral-map.png';
var neutralMapLabel = 'neutral-map';
var neutralMapImage;
var neutralMaps;
var neutralMapVelocity = 120;
var mapsCount = 2;      // number changes pending size of map versus size of screen

// player data
var playerScore = 0;
var playerScoreText;

// controllers
var cursors;
var dCursors;   // developers' cursors

/**
 * getMapSpeed() validates config['mapSpeed']
 * if valid, then store it in neutralMapVelocity
 * otherwise, use default speed of 250
 */
function getMapSpeed(){
    if(config['mapSpeed']){
        if(!isNaN(parseFloat(config['mapSpeed'])))
            return neutralMapVelocity;
        else
            return config['mapSpeed'];
    }
    return neutralMapVelocity;
}

function changeMapSpeed(deltaSpeed){
    neutralMapVelocity += deltaSpeed;
}

function createMaps(){
    neutralMaps = [];

    var tempMap;
    var currentYPosition = 0;   // identifies the y-positions when stacking maps into list

    for(var i = 0; i < mapsCount; i++){
        // create map and give it an ID
        tempMap = game.add.sprite(0, currentYPosition, neutralMapLabel);
        tempMap.name = neutralMapLabel + '-' + i;
        game.physics.arcade.enable(tempMap);

        // ensure map fits on screen
        scaleMapValue = w / tempMap.width;
        tempMap.scale.setTo(scaleMapValue);
        
        neutralMaps.push(tempMap);
        currentYPosition -= tempMap.height;
    }
}

function updateNeutralMapPosition(){
    // check if map image has gone passed the screen, if so, place map back to other side of screen
    for (var key in neutralMaps){
        if(neutralMaps[key].body.y >= neutralMaps[key].height){
            neutralMaps[key].body.y = 0 - neutralMaps[key].height;
        }
        neutralMaps[key].body.velocity.y = neutralMapVelocity;
    }

    // update score and text
    playerScoreText.setText("SCORE: " + playerScore++);
}

var gameLoop = {
    preload: function () {
        // load neutral map
        neutralMapImage = game.load.image(neutralMapLabel, neutralMapAsset);

    },

    create: function () {
        neutralMapVelocity = getMapSpeed();

        createMaps();
        if(DEBUG){
            for(var key in neutralMaps)
                console.log("Debug: neutralMap y-position = " + neutralMaps[key].body.y);
        }

        // prepare player
        playerScoreText = game.add.text(0, 0, 'SCORE:', {font: 'bold 30px Courier', fill: '#fff'});

        // create user input
        cursors = game.input.keyboard.createCursorKeys();
        dCursors = game.input.keyboard
    },

    update: function(){
        updateNeutralMapPosition();

        // developer buttons, IHAX YUR GAMEZ!!
        if(DEBUG){
            if(dCursors.isDown(Phaser.KeyCode.OPEN_BRACKET))
                changeMapSpeed(-1);
            if(dCursors.isDown(Phaser.KeyCode.CLOSED_BRACKET))
                changeMapSpeed(1);
        }
    }
};
