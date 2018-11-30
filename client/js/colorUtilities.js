var colorUtilities = {
    /**
     * Takes in 2 hex colors and returns the average blended hex color between the two.
     * The hex must be legitimate hex, e.g. 0xFF0000 (red), 0x0000FF (blue), and NOT a string representation, e.g. "#FF0000"
     * This function will produce accurate results for subtractive mixing with the estimated primaries of red, yellow, and blue
     * as long as the input arguments are one of either red, yellow, or blue.
     */
    mixColors: (color1, color2) => {
        // Mixing yellow and blue is a special case, since this game uses subtractive color mixing
        if ((color1 === 0xFFFF00 && color2 === 0x0000FF) ||
            (color2 === 0xFFFF00 && color1 === 0x0000FF)) {
            return 0x00FF00;    // yellow + blue = green. Using standard additive mixing here will produce grey
        }

        let color1rgb = colorUtilities.hexToRgb(color1);
        let color2rgb = colorUtilities.hexToRgb(color2);

        let mixedColor = {
            r: Math.round((color1rgb.r + color2rgb.r) / 2),
            g: Math.round((color1rgb.g + color2rgb.g) / 2),
            b: Math.round((color1rgb.b + color2rgb.b) / 2)
        };

        mixedColor = colorUtilities.rgbToHex(mixedColor);
        return mixedColor;
    },

    // This is more like decimal to rgb, just that decimal can be represented as hex, which then represents RGB values
    hexToRgb: (hex) => {
        let result = {
            r: Math.floor(hex / (256 * 256)),
            g: Math.floor(hex / 256) % 256,
            b: hex % 256,
        };
        return result;
    },

    // Does the exact reverse of hexToRgb
    rgbToHex: (color) => {
        let r = color.r * (256 * 256);
        let g = color.g * (256);
        let b = color.b;
        return r + g + b;
    }
};

colorUtilities.colorStates = {
       activeColors: [], //array of 2
       activeNumber: 0,
       spawnedPickups: [],
       blockColors: []
};

colorUtilities.setNextActiveColor = (color) => {
    let activeNumber = colorUtilities.colorStates.activeNumber;
    let activeColors = colorUtilities.colorStates.activeColors;
    let nextColorIsFirstSlot = colorUtilities.colorStates.activeNum === 0;
    activeColors[activeNumber] = color;
    if (nextColorIsFirstSlot){
        colorUtilities.colorStates.activeNumber = activeNumber + 1;
    }
    else {
        colorUtilities.colorStates.activeNumber = activeNumber - 1;
    }

    if (colorUtilities.onNewActiveColor){
        colorUtilities.onNewActiveColor(colorUtilities.colorStates.activeNumber);
    }
    return colorUtilities.colorStates.activeNumber;
};

colorUtilities.setFullNextBlockColor = (fullBlock) => {
    const pickups = colorUtilities.colorStates.spawnedPickups;
    const actives = colorUtilities.colorStates.activeColors;
    const types   = Object.keys(config.default.colors);
    const colorOptions = pickups.concat(actives);

    
    const colorOptions = types.map((option) => {
        for (let c in pickups){
            if (pickups[c] === option)
        };
    });
    const colorOptions = [];


    

};

colorUtilities.getColorCombo = (color1, color2) => {
    const colorsAreTheSame = color1 === color2;
    let results = colorsAreTheSame ? color1 : colorUtilities.mixColors(color1, color2);
    return results
};



