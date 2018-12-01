const neutralMap = {};

neutralMap.init = (data) => {
    data = typeof data === "undefined" ? {} : data;
    neutralMap.mapData = data.neutralMap || config.neutralMap;
    neutralMap.width = data.width || config.init.screenWidth;
    neutralMap.height = data.height || config.init.screenHeight;

    neutralMap.graphicCenter = [0.5, 0.5];

};

neutralMap.createMaps = () => {

    let nextMapSpriteBottom = neutralMap.height;
    let latestMapSprite;
    do {
        let mapSpriteData = [
            neutralMap.width * neutralMap.mapData.xRegion,
            0,  // this will be changed
            neutralMap.mapData.imgKey
        ];
        latestMapSprite = game.add.sprite(...mapSpriteData);
        latestMapSprite.anchor.setTo(...neutralMap.graphicCenter);
        latestMapSprite.scale.x = latestMapSprite.scale.y =
            transformUtilities.getScaleValueToEnvelopeRect(latestMapSprite.width, latestMapSprite.height, neutralMap.width, neutralMap.height);
        latestMapSprite.y = nextMapSpriteBottom - latestMapSprite.height * (1 - latestMapSprite.anchor.y);

        latestMapSprite.onFullyOnMap = neutralMap.generateNewMap;

        nextMapSpriteBottom = transformUtilities.getTopPosition(latestMapSprite.y, latestMapSprite.height, latestMapSprite.anchor.y);    // next map sprite bottom is latest map sprite top

        mapController.addToMap(latestMapSprite);
    } while (nextMapSpriteBottom >= 0);
};

neutralMap.generateNewMap = (topPosition) => {
    let mapSpriteData = [
        neutralMap.width * neutralMap.mapData.xRegion,
        0,  // this will be changed
        neutralMap.mapData.imgKey
    ];
    let mapSprite = game.add.sprite(...mapSpriteData);
    mapSprite.anchor.setTo(...neutralMap.graphicCenter);
    mapSprite.scale.x = mapSprite.scale.y =
        transformUtilities.getScaleValueToEnvelopeRect(mapSprite.width, mapSprite.height, neutralMap.width, neutralMap.height);
    mapSprite.y = topPosition - mapSprite.height * (1 - mapSprite.anchor.y);

    mapSprite.onFullyOnMap = neutralMap.generateNewMap;

    mapController.addToMap(mapSprite);
};

// setup neutral map
neutralMap.create = () => {
    neutralMap.createMaps();
};