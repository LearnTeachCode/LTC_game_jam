const mapUtilities = {};

mapUtlities.layouts = [];

mapUtilities.generateLayout = (call) => {

    let newLayout = [];
    let rowSize    = config.default.mapUtilities.rowsize;
    let columnSize = config.default.mapUtilities.columnSize;
    for (let r = 0; r < rowSize; r++){
        newLayout.push(...Array(columnSize));
    };

    if (call && typeof call === "function"){
        call(newLayout);
    }
    return newLayout;
};

mapUtilities.labelIcons = function(){};
mapUtilities.clearColumn = (ray) => {

};