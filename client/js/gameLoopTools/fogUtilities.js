const fogUtilities = {};
fogUtilities.create = (player) => {
    let fogSprite = game.make.sprite(0, 0, config.default.fog.key);
    let fogCenter = [0.5, 0.5];
    fogSprite.anchor.setTo(...fogCenter);
    player.sprite.addChild(fogSprite);
};
