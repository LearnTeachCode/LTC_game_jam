const blockUtilities = {};
//initialize sprite pool, should be a phaser group
blockUtilities.collection = [];
blockUtilities.init = (data) => {
    blockUtilities.mapVelocity = data.mapVelocity || config.delfault.settings.mapVelocity;
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
blockUtilities.update = (block) => {};