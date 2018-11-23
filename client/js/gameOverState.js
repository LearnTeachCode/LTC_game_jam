var gameOverState = {
    restartGame: function () {
        game.state.start('gameLoop');
    },

    // TODO: Move this into load.js
    preload: function () {
        game.load.image('restartButton', 'assets/img/startButton.png');
    },

    create: function () {
        let gameOverLabel = game.add.text(w / 2, 0.25 * h, 'Game Over!', { font: '35px Courier', fill: '#fff' });
        gameOverLabel.anchor.setTo(0.5);
        let finalScoreLabel = game.add.text(w / 2, 0.33 * h, 'Final Score:', { font: '30px Courier', fill: '#fff' });
        finalScoreLabel.anchor.setTo(0.5);
        let finalScore = game.add.text(w / 2, 0.45 * h, playerScore, { font: '30px Courier', fill: '#fff' });
        finalScore.anchor.setTo(0.5);

        let restartButton = game.add.button(w / 2, 2 / 3 * h, 'restartButton', gameOverState.restartGame, this, 0, 0, 0);
        restartButton.anchor.setTo(0.5);
    }

};
