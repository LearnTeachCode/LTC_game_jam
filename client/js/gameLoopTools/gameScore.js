
let gameScore = {};

gameScore = {
    init: (data) => {
        data = typeof data === "undefined" ? { gameScore: {} } : data;
        gameScore.amount = data.amount || config.default.score.amount;
        gameScore.bonus = data.bonus || config.default.score.bonus;
        gameScore.text = data.text || config.default.score.text;
        gameScore.x = data.x || config.default.score.x;
        gameScore.y = data.y || config.default.score.y;
        gameScore.numOffsetX = data.numOffsetX || config.default.score.numOffsetX;

        // images
        gameScore.scoreSprite;      // sprite image placeholder
        gameScore.scoreTextKey = data.textImgLabel || config.default.score.sprites.scoreText.key;
        gameScore.spriteMap = data.spriteMap || config.default.score.spriteMap;

        return gameScore;
    },

    updateScoreNumbers: () => {
        // kill all the children (that sounds... wrong)
        if (gameScore.scoreSprite.children.length > 0){
            gameScore.scoreSprite.removeChildren();
        }
        
        // create children based on score amount
        let amountStr = gameScore.amount.toString();
        let offSetX = gameScore.numOffsetX;
        let length = amountStr.length;

        for(var i = 0; i < length; i++){
            gameScore.scoreSprite.addChild(game.make.sprite(offSetX+gameScore.scoreSprite.width, gameScore.y, gameScore.spriteMap[amountStr[i]]));
            offSetX += gameScore.numOffsetX;
        }
        return gameScore.scoreSprite;
    },

    setText: (newScore) => {
        if (newScore != null){
            gameScore.amount++;
        }
        else{
            gameScore.amount = newScore;
        }
        gameScore.updateScoreNumbers();
        return gameScore.amount;
    },
        
    create: () => {
        // Score text
        gameScore.scoreSprite = game.add.sprite(gameScore.x, gameScore.y, gameScore.scoreTextKey);
        return gameScore;
    },
};
