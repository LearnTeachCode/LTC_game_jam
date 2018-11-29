
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

    setSpriteMap: () => {

    },

    updateScoreNumbers: () => {
        // kill all the children (that sounds... wrong)
        while (gameScore.scoreSprite.children > 0)
            gameScore.scoreSprite.removeChild(0);
        
        // create children based on score amount
        let amountStr = gameScore.amount.toString();
        let offSet = gameScore.numOffsetX;

        //gameScore.scoreSprite.addChild(0);
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
        gameScore.setSpriteMap();
        return gameScore;
    },
};
