const blockUtilities = {};
//initialize sprite pool, should be a phaser group
blockUtilities.onScreenWrap = false; //callback function that happens when a marker goes back to the top of the layout
blockUtilities.initMarkers = () => {

    let startMarkerData = [
        config.default.gameMap.startMarker.x,
        config.default.gameMap.startMarker.y,
        config.default.blocks.quarter.key
    ];

    let startMarker = game.add.sprite(...startMarkerData);
    game.physics.enable(startMarker, Phaser.Physics.ARCADE);
    startMarker.visible = true;
    startMarker.update = () => {
        startMarker.body.velocity.y = config.default.settings.mapVelocity;

        //wrap to the top of the map
        if (startMarker.y > game.world.height){
            startMarker.y = -(game.world.height + config.default.settings.wrapOffset);

            let wrapEvent = (typeof blockUtilities.onScreenWrap === "function");
            if(wrapEvent){
                blockUtilities.onScreenWrap(startMarker);
            }
        }
    }

    let endMarkerData = [
        config.default.gameMap.endMarker.x,
        config.default.gameMap.endMarker.y,
        config.default.blocks.quarter.key
    ];

    let endMarker = game.add.sprite(...endMarkerData);
    game.physics.enable(endMarker, Phaser.Physics.ARCADE);
    endMarker.visible = true;
    endMarker.update = () => {
        endMarker.body.velocity.y = config.default.settings.mapVelocity;

        //wrap to the top of the map
        if (endMarker.y > game.world.height){
            endMarker.y = -(game.world.height + config.default.settings.wrapOffset);

            let wrapEvent = (typeof blockUtilities.onScreenWrap === "function");
            if(wrapEvent){
                blockUtilities.onScreenWrap(endMarker);
            }
        }
    }

    return [startMarker, endMarker];
}

blockUtilities.init = (data) => {
    let markers = blockUtilities.initMarkers();
    blockUtilities.startMarker = markers[0];
    blockUtilities.endMarker   = markers[1];
    blockUtilities.collection = game.add.group();
    blockUtilities.collection.enableBody = true;
    blockUtilities.collection.physicsBodyType = Phaser.Physics.ARCADE;
    blockUtilities.mapVelocity = config.default.settings.mapVelocity;
};

blockUtilities.setVelocity = (value) => {
    blockUtilities.mapVelocity = value;
};

blockUtilities.create = (controller, data) => {
    let block = {};
    const blockData = config.default.blocks[data.type];
    let blockSpriteData = [
        data.x,
        data.y,
        blockData.key
    ];
    block.scoreValue = blockData.score;
    block.sprite = game.add.sprite(...blockSpriteData);
    blockUtilities.collection.push(block);
    return block;
};
blockUtilities.update = (data) => {
    
};
