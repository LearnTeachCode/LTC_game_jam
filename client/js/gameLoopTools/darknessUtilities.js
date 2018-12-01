const darknessUtilities = {};
darknessUtilities.create = (player) => {
    let darknessSprite = game.make.sprite(0, 0, config.default.darkness.key);
    let darknessCenter = [0.5, 0.5];
    darknessSprite.anchor.setTo(...darknessCenter);
    player.sprite.addChild(darknessSprite);
};
