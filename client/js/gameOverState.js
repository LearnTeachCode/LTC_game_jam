// initialize gameOverState 1st so it functions as a namespace
let gameOverState = {};
gameOverState = {
    init: (data) => {
        data = typeof data === "undefined" ? { gameOverState: {} } : data;
        gameOverState.width = data.width || config.init.screenWidth;
        gameOverState.height = data.height || config.init.screenHeight;
        gameOverState.finalScoreLabel = data.gameOverState.finalScoreLabel || config.gameOverState.finalScoreLabel;
        gameOverState.finalScoreText = data.gameOverState.finalScoreText || config.gameOverState.finalScoreText;
        gameOverState.finalScore = data.score || config.default.score;
        gameOverState.restartButton = data.gameOverState.restartButton || config.gameOverState.restartButton;
    },

    restartGame: function () {
        game.state.start('gameLoop');
    },

    create: () => {
        const graphicCenter = [0.5, 0.5];    // [X, Y]

        let finalScoreLabelData = [
            gameOverState.width * gameOverState.finalScoreLabel.xRegion,
            gameOverState.height * gameOverState.finalScoreLabel.yRegion,
            gameOverState.finalScoreLabel.text,
            gameOverState.finalScoreLabel.style
        ];
        gameOverState.finalScoreLabel.textObj = game.add.text(...finalScoreLabelData);
        gameOverState.finalScoreLabel.textObj.anchor.setTo(...graphicCenter);

        let finalScoreData = [
            gameOverState.width * gameOverState.finalScoreText.xRegion,
            gameOverState.height * gameOverState.finalScoreText.yRegion,
            gameOverState.finalScore.amount,
            gameOverState.finalScoreText.style
        ];
        gameOverState.finalScoreText.textObj = game.add.text(...finalScoreData);
        gameOverState.finalScoreText.textObj.anchor.setTo(...graphicCenter);

        let restartButtonData = [
            gameOverState.width * gameOverState.restartButton.xRegion,
            gameOverState.height * gameOverState.restartButton.yRegion,
            gameOverState.restartButton.imageKey,
            gameOverState.restartGame,
            gameOverState
        ];
        gameOverState.restartButton.button = game.add.button(...restartButtonData);
        gameOverState.restartButton.button.anchor.setTo(...graphicCenter);
    }
};
