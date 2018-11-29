
///////////////////////////////////////////////////////////////////////////
///////////////////////// START Neutral Map Handling //////////////////////
///////////////////////////////////////////////////////////////////////////

// neutral map variables
const neutralMap = {};
neutralMap.maps;
neutralMap.velocity = config.default.settings.mapVelocity;
neutralMap.mapsCount = config.default.neutralMap.mapsCount;      // number changes pending size of map versus size of screen

/**
 * getMapSpeed() validates config['mapSpeed']
 * if valid, then store it in neutralMap.velocity
 * otherwise, use current value of neutralMap.velocity as default
 */
neutralMap.getMapSpeed = () => {
    if (config.default.debug.isOn === true){
        if (config.default.settings.mapVelocity){
            console.log("Config mapSpeed: " + config.default.settings.mapVelocity);
        }
    }
}

neutralMap.setMapSpeed = (deltaSpeed) => {
    neutralMap.velocity += deltaSpeed;
    if(config.default.debug.isOn === true){
        console.log("Map Speed Changed! Current speed: " + neutralMap.velocity)
    }
}

neutralMap.createMaps = () => {

    neutralMap.maps = [];

    var tempMap;
    var currentYPosition = 0;   // identifies the y-positions when stacking maps into list

    for(var i = 0; i < neutralMap.mapsCount; i++){
        // create map and give it an ID
        tempMap = game.add.sprite(0, currentYPosition, config.default.neutralMap.key);
        tempMap.name = config.default.neutralMap.key + '-' + i;
        game.physics.arcade.enable(tempMap);

        // ensure map fits on screen
        // let scaleMapValue = config.init.screenWidth / tempMap.width;
        // tempMap.scale.setTo(scaleMapValue);

        // add new map to the stack list and prepare Y position for next map to stack on this one
        neutralMap.maps.push(tempMap);
        currentYPosition -= tempMap.height;
    }

    if(config.default.debug.isOn === true){
        for(var key in neutralMap.maps)
            console.log("Debug: neutralMap y-position = " + neutralMap.maps[key].body.y);
    }
}

neutralMap.updateMap = () => {
    // check if map image has gone passed the screen, if so, place map back to other side of screen
    for (var key in neutralMap.maps){
    // if(neutralMap.maps[key].body.y >= neutralMap.maps[key].height){
        if(neutralMap.maps[key].y > game.world.height) {
            //neutralMap.maps[key].y = 0 - neutralMap.maps[key].height;
            neutralMap.maps[key].y = -(game.world.height + config.default.settings.wrapOffset);
        }
        neutralMap.maps[key].body.velocity.y = config.default.settings.mapVelocity;
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
