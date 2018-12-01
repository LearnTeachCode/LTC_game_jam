const objectSpawner = {};

objectSpawner.inactiveObjectPool;
objectSpawner.activeObjectPool = {};
objectSpawner.distanceUntilNextColorPickupSpawn;

objectSpawner.init = (data) => {
    data = typeof data === "undefined" ? {} : data;
    objectSpawner.colorPickup = data.colorPickup || config.default.colorPickup;
    objectSpawner.tiles = data.settings || config.default.settings;
    objectSpawner.width = data.screenWidth || config.init.screenWidth;

    objectSpawner.id = 0;
    objectSpawner.inactiveObjectPool = [];
    objectSpawner.graphicCenter = [0.5, 0.5];
};

objectSpawner.create = () => {
    objectSpawner.assignNextDistanceUntilColorPickupSpawn();
};

objectSpawner.update = () => {
    objectSpawner.distanceUntilNextColorPickupSpawn -= mapController.speed;
    if (objectSpawner.distanceUntilNextColorPickupSpawn <= 0) {
        objectSpawner.assignNextDistanceUntilColorPickupSpawn();
        let pickup = objectSpawner.spawnColorPickup();

        let pickupEventInitiated = typeof objectSpawner.onSpawn === "function"
        if (pickupEventInitiated){
            objectSpawner.onSpawn(pickup)
        }
    }
};

objectSpawner.assignNextDistanceUntilColorPickupSpawn = () => {
    let minDistance = objectSpawner.colorPickup.tilesBetweenSpawns.min * objectSpawner.tiles.tileHeight;
    let maxDistance = objectSpawner.colorPickup.tilesBetweenSpawns.max * objectSpawner.tiles.tileHeight;
    objectSpawner.distanceUntilNextColorPickupSpawn = randomUtilities.randomRange(minDistance, maxDistance);
};

objectSpawner.spawnColorPickup = () => {
    let colorPickup = {
        type: "color",
        color: objectSpawner.colorPickup.colorOptions[randomUtilities.randomInt(0, objectSpawner.colorPickup.colorOptions.length)],
        id: objectSpawner.id++
    };

    const theresNoItemsToDeploy = objectSpawner.inactiveObjectPool.length === 0;
    if (theresNoItemsToDeploy) {
        let colorPickupData = [
            0,
            0,
            objectSpawner.colorPickup.key
        ];
        colorPickup.sprite = game.add.sprite(...colorPickupData);
        colorPickup.sprite.anchor.setTo(...objectSpawner.graphicCenter);
    }
    else {
        colorPickup.sprite = objectSpawner.inactiveObjectPool.pop();
    }
    game.physics.enable(colorPickup.sprite, Phaser.Physics.ARCADE);
    //colorPickup.sprite.enableBody = true;
    let minX = colorPickup.sprite.width * colorPickup.sprite.anchor.x;
    let maxX = objectSpawner.width - colorPickup.sprite.width * (1 - colorPickup.sprite.anchor.x);
    colorPickup.sprite._spawnParent = colorPickup;
    objectSpawner.activeObjectPool[colorPickup.id] = colorPickup;
    colorPickup.sprite.x = randomUtilities.randomRange(minX, maxX);
    colorPickup.sprite.tint = colorPickup.color.value;
    colorPickup.sprite.onFullyLeftMap = objectSpawner.disableObject;
    colorPickup.sprite.enabled = true;
    mapController.addToTopOfMap(colorPickup.sprite);

    return colorPickup;
};

objectSpawner.disableObject = (object) => {

    object.enabled = false;
    object.enableBody = false;
    delete objectSpawner.activeObjectPool[object._spawnParent.id];
    objectSpawner.inactiveObjectPool.push(object);
};

objectSpawner.onSpawn = null;
