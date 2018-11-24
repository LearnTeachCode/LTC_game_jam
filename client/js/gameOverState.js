// initialize gameOverState 1st so it functions as a namespace
let gameOverState = {};
gameOverState = {
    init: (data) => {
        data = typeof data === "undefined" ? {} : data;
        gameOverState.width = data.width || config.init.screenWidth;
        gameOverState.height = data.height || config.init.screenHeight;
        gameOverState.finalScoreLabel = data.finalScoreLabel || config.default.finalScoreLabel;
        gameOverState.finalScoreText = data.finalScoreText || config.default.finalScoreText;
        gameOverState.finalScore = data.score || config.default.score;
        gameOverState.restartButton = data.restartButton || config.default.restartButton;
    },

    restartGame: function () {
        game.state.start('gameLoop');
    },

    // TODO: Move this into load.js and use config data, and this data structure
    preload: () => {
        game.load.image(gameOverState.restartButton.imageKey, gameOverState.restartButton.spriteSrc);
    },

    create: () => {
        const spriteCenter = [0.5, 0.5];    // [X, Y]

        let finalScoreLabelData = [
            gameOverState.width * gameOverState.finalScoreLabel.xRegion,
            gameOverState.height * gameOverState.finalScoreLabel.yRegion,
            gameOverState.finalScoreLabel.text,
            gameOverState.finalScoreLabel.style
        ];
        gameOverState.finalScoreLabel.textObj = game.add.text(...finalScoreLabelData);
        gameOverState.finalScoreLabel.textObj.anchor.setTo(...spriteCenter);

        let finalScoreData = [
            gameOverState.width * gameOverState.finalScoreText.xRegion,
            gameOverState.height * gameOverState.finalScoreText.yRegion,
            gameOverState.finalScore.amount,
            gameOverState.finalScoreText.style
        ];
        gameOverState.finalScoreText.textObj = game.add.text(...finalScoreData);
        gameOverState.finalScoreText.textObj.anchor.setTo(...spriteCenter);

        let restartButtonData = [
            gameOverState.width * gameOverState.restartButton.xRegion,
            gameOverState.height * gameOverState.restartButton.yRegion,
            gameOverState.restartButton.imageKey,
            gameOverState.restartGame,
            gameOverState,
            0,
            0,
            0
        ];
        gameOverState.restartButton.button = game.add.button(...restartButtonData);
        gameOverState.restartButton.button.anchor.setTo(...spriteCenter);
    }
};
