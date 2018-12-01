const objectSpawner = {};

objectSpawner.objectPool = [];

objectSpawner.init = (data) => {
    data = typeof data === "undefined" ? {} : data;
    objectSpawner.colorPickup = data.colorPickup || config.default.colorPickup;
    objectSpawner.validColors = data.colorPickupColorOptions || config.default.colorPickupColorOptions;
};

objectSpawner.create = () => {

};
