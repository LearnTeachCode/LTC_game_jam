var menuState = {
    startGame: function () {
        game.state.start('gameLoop');
    },

    // TODO: Move this into load.js
    preload: function () {
        game.load.image('startButton', 'assets/img/startButton.png');
        game.load.image('mainMenuBackground', 'assets/img/mainMenuBackground.jpg');
    },

    create: function () {
        let mainMenuBackground = game.add.image(w / 2, h / 2, 'mainMenuBackground');
        mainMenuBackground.anchor.setTo(0.5);
        mainMenuBackground.scale.x = mainMenuBackground.scale.y = getScaleValueToEnvelopeRect(mainMenuBackground.width, mainMenuBackground.height, w, h);

        let titleText = game.add.text(w / 2, 0.4 * h, 'Path Light', { font: '70px Courier', fill: '#ADD8E6', strokeThickness: 3 });
        titleText.anchor.setTo(0.5);

        let startButton = game.add.button(w / 2, 2 / 3 * h, 'startButton', menuState.startGame, this, 0, 0, 0);
        startButton.anchor.setTo(0.5)
    }
};

function getScaleValueToEnvelopeRect(childWidth, childHeight, parentWidth, parentHeight) {
    let xScale = parentWidth / childWidth;
    let yScale = parentHeight / childHeight;
    if (childHeight * xScale >= parentHeight)
        return xScale;
    else
        return yScale;
};
