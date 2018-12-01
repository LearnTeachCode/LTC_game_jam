const scoreUtilities = {};
scoreUtilities.create = (score) => {
    score.sprite = game.add.sprite(score.x, score.y, score.sprites.scoreText.key);
    game.physics.enable(score.sprite, Phaser.Physics.ARCADE);
    score.spriteMap = config.default.score.spriteMap;
};

scoreUtilities.setText = (score, newScore) => {
    if (newScore != null){
        score.amount++;
    }
    else{
        score.amount = newScore;
    }
    // kill all the children (that sounds... wrong)
    if (score.sprite.children.length > 0){
        score.sprite.removeChildren();
    }
    
    // create children based on score amount
    let amountStr = score.amount.toString();
    let offSetX = score.numOffsetX;
    let length = amountStr.length;

    for(var i = 0; i < length; i++){
        score.sprite.addChild(game.make.sprite(offSetX+score.sprite.width, score.y, score.spriteMap[amountStr[i]]));
        offSetX += score.numOffsetX;
    }
    return score.amount;
};
