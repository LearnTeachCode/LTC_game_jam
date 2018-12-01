const objectSpawner = {};

objectSpawner.inactiveObjectPool;
objectSpawner.distanceUntilNextColorPickupSpawn;

objectSpawner.init = (data) => {
    data = typeof data === "undefined" ? {} : data;
    objectSpawner.colorPickup = data.colorPickup || config.default.colorPickup;
    objectSpawner.tiles = data.settings || config.default.settings;
    objectSpawner.width = data.screenWidth || config.init.screenWidth;
    
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
        objectSpawner.spawnColorPickup();
    }
};

objectSpawner.assignNextDistanceUntilColorPickupSpawn = () => {
    let minDistance = objectSpawner.colorPickup.tilesBetweenSpawns.min * objectSpawner.tiles.tileHeight;
    let maxDistance = objectSpawner.colorPickup.tilesBetweenSpawns.max * objectSpawner.tiles.tileHeight;
    objectSpawner.distanceUntilNextColorPickupSpawn = randomUtilities.randomRange(minDistance, maxDistance);
};

objectSpawner.spawnColorPickup = () => {
    let colorPickup;
    if (objectSpawner.inactiveObjectPool.length === 0) {
        let colorPickupData = [
            0,
            0,
            objectSpawner.colorPickup.key
        ];
        colorPickup = game.add.sprite(...colorPickupData);
        colorPickup.anchor.setTo(...objectSpawner.graphicCenter);
    }
    else {
        colorPickup = objectSpawner.inactiveObjectPool.pop();
    }
    let minX = colorPickup.width * colorPickup.anchor.x;
    let maxX = objectSpawner.width - colorPickup.width * (1 - colorPickup.anchor.x);
    colorPickup.x = randomUtilities.randomRange(minX, maxX);
    colorPickup.tint = objectSpawner.colorPickup.colorOptions[randomUtilities.randomInt(0, objectSpawner.colorPickup.colorOptions.length)].value;
    colorPickup.onFullyLeftMap = objectSpawner.disableObject;
    colorPickup.enabled = true;
    mapController.addToTopOfMap(colorPickup);
};

objectSpawner.disableObject = (object) => {
    object.enabled = false;
    objectSpawner.inactiveObjectPool.push(object);
};