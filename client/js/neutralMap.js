
///////////////////////////////////////////////////////////////////////////
///////////////////////// START Neutral Map Handling //////////////////////
///////////////////////////////////////////////////////////////////////////

// neutral map variables
const neutralMap = {};
neutralMap.maps;
neutralMap.velocity = config.neutralMap.velocity;
neutralMap.mapsCount = config.neutralMap.mapsCount;      // number changes pending size of map versus size of screen

/**
 * getMapSpeed() validates config['mapSpeed']
 * if valid, then store it in neutralMap.velocity
 * otherwise, use current value of neutralMap.velocity as default
 */
neutralMap.getMapSpeed = () => {
    if (DEBUG){
        if (config.neutralMap.mapSpeed){
            console.log("Config mapSpeed: " + config.neutralMap.mapSpeed);
        }
    }
    if(config.neutralMap.mapSpeed && !isNaN(parseFloat(config.neutralMap.mapSpeed)))
        neutralMap.velocity = config.neutralMap.mapSpeed;
}

neutralMap.changeMapSpeed = (deltaSpeed) => {
    neutralMap.velocity += deltaSpeed;
    if (DEBUG){
        console.log("Map Speed Changed! Current speed: " + neutralMap.velocity)
    }
}

neutralMap.createMaps = () => {

    neutralMap.maps = [];

    var tempMap;
    var currentYPosition = 0;   // identifies the y-positions when stacking maps into list

    for(var i = 0; i < neutralMap.mapsCount; i++){
        // create map and give it an ID
        tempMap = game.add.sprite(0, currentYPosition, config.neutralMap.mapLabel);
        tempMap.name = config.neutralMap.mapLabel + '-' + i;
        game.physics.arcade.enable(tempMap);

        // ensure map fits on screen
        scaleMapValue = config.init.screenWidth / tempMap.width;
        tempMap.scale.setTo(scaleMapValue);
        
        // add new map to the stack list and prepare Y position for next map to stack on this one
        neutralMap.maps.push(tempMap);
        currentYPosition -= tempMap.height;
    }

    if(DEBUG){
        for(var key in neutralMap.maps)
            console.log("Debug: neutralMap y-position = " + neutralMap.maps[key].body.y);
    }
}

neutralMap.updateMap = () => {
    // check if map image has gone passed the screen, if so, place map back to other side of screen
    for (var key in neutralMap.maps){
        if(neutralMap.maps[key].body.y >= neutralMap.maps[key].height){
            neutralMap.maps[key].body.y = 0 - neutralMap.maps[key].height;
        }
        neutralMap.maps[key].body.velocity.y = config.neutralMap.velocity;
    }
}

// setup neutral map
neutralMap.create = () => {
    neutralMap.getMapSpeed();
    neutralMap.createMaps();
}

///////////////////////////////////////////////////////////////////////////
///////////////////////// END Neutral Map Handling ////////////////////////
///////////////////////////////////////////////////////////////////////////
