const blockUtilities = {};
//initialize sprite pool, should be a phaser group
blockUtilities.collection = [];
blockUtilities.create = (controller, data) => {
    let blockStartData = [
        data.x || 0,
        data.y || 0,
        config.default.blocks.quarter.key
    ];
    // setup player
    const block = game.add.sprite(...blockStartData);
    blockUtilities.collection.push(block);
    return block;
};
blockUtilities.update = (block) => {};