// This implementation of the map controller takes the same data as every other phaser state, which is the config variable.
// This avoids having to pass all the data needed for the mapController in explicitly, as all the data the controller needs is in the config.

const mapController = {};
// mapController properties - this is my C# influence ^_^ (Eric)
mapController.bottom;
mapController.top;
mapController.speed;
mapController.mapObjects;  // Anything in here will move down with the map
// Anything in mapObjects must have a .height, .anchor, and .y component so that their positions can be defined and manipulated.
// Anything in mapObjects must also not use its .fullyOnMap property
// Optionally, anything in mapObjects can have these callbacks: .onFullyOnMap, .onFullyLeftMap

mapController.init = (data) => {
    data = typeof data === "undefined" ? {} : data;
    // external data
    mapController.settings = data.settings || config.default.settings;
    mapController.bottom = data.height || config.init.screenHeight;

    // assign to internal member data
    mapController.top = 0;
    mapController.speed = mapController.settings.mapVelocity;
    mapController.mapObjects = [];
};

/*
 * Adds an object to the map to start traveling downwards.
 */
mapController.addToMap = (object) => {
    if (object.height == null || object.anchor == null || object.y == null) {
        console.log("Cannot add %s to the map because it doesn't contain .height, .anchor, or a .y property!", object);
        return null;
    }

    let objectTop = transformUtilities.getTopPosition(object.y, object.height, object.anchor.y);
    if (mapController.top <= objectTop)
        object.fullyOnMap = true;
    else
        object.fullyOnMap = false;
    mapController.mapObjects.push(object);
    return object;
};

/*
 * Adds an object specifically to the top of the map, right above where it will become visible.
 */
mapController.addToTopOfMap = (object) => {
    let addedObj = mapController.addToMap(object);  // This lets one function perform the null check without overriding the passed in object
    if (addedObj == null)
        return;
    object = addedObj;
    object.y = mapController.top - object.height * (1 - object.anchor.y); // anchor.y = 0 means anchor is at top of object
    object.fullyOnMap = false;
};

mapController.update = () => {
    for (i = mapController.mapObjects.length - 1; i >= 0; i--) {    // Backwards iteration since items could be removed from the array
        let object = mapController.mapObjects[i];

        if (object.y == null) { // This is in case the mapController is not destroyed upon game state change
            mapController.mapObjects.splice(i, 1);
            continue;
        }

        object.y += mapController.speed;

        let objectTop = transformUtilities.getTopPosition(object.y, object.height, object.anchor.y);
        
        if (object.fullyOnMap === false) {
            if (mapController.top <= objectTop) {
                if (typeof (object.onFullyOnMap) === "function") {
                    // Since the top of the object might be past y=0 when this is detected, the position of the object top is passed
                    // as an argument to use for spawning the next object at the correct position
                    object.onFullyOnMap(transformUtilities.getTopPosition(object.y, object.height, object.anchor.y));
                }
                object.fullyOnMap = true;
            }
        }
        else {
            if (mapController.top > objectTop)
                object.fullyOnMap = false;
        }

        if (mapController.bottom <= objectTop) {
            if (typeof (object.onFullyLeftMap) === "function") {
                object.onFullyLeftMap();    // This delegate acts as an override to the default auto-destroy behavior
            }
            else {
                object.destroy();
                mapController.mapObjects.splice(i, 1);
            }
        }
    }
};

mapController.destroy = () => {
    mapController.mapObjects = [];
};