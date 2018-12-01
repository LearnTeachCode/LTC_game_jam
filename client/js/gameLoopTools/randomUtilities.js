const randomUtilities = {};

randomUtilities.randomRange = (min, max) => {
    return Math.random() * (max - min) + min;
};

randomUtilities.randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};