var menuState = {
    sprites: [],

    startGame: function () {
        // TODO: start game loop
        menuState.sprites.forEach(function (sprite) {
            sprite.destroy();
        });
        game.add.text(0, 0, "you are now playing the game,\nand you just lost the game", { font:'50px', fill: '#fff' });
    },

    // TODO: Move this into load.js
    preload: function () {
        game.load.image('startButton', 'assets/img/startButton.png');
        game.load.image('mainMenuBackground', 'assets/img/mainMenuBackground.jpg');
    },

    create: function () {

        game.add.plugin(Phaser.Plugin.Debug);
        //game.add.plugin(Phaser.Plugin.Inspector);
        game.add.plugin(PhaserSuperStorage.StoragePlugin);
        game.add.plugin(PhaserInput.Plugin);

        let mainMenuBackground = game.add.image(w / 2, h / 2, 'mainMenuBackground');
        menuState.sprites.push(mainMenuBackground);
        mainMenuBackground.anchor.setTo(0.5);
        mainMenuBackground.scale.x = mainMenuBackground.scale.y = getScaleValueToEnvelopeRect(mainMenuBackground.width, mainMenuBackground.height, w, h);
        
        let startButton = game.add.button(w / 2, 2 / 3 * h, 'startButton', menuState.startGame, this, 100, 100, 100);
        menuState.sprites.push(startButton);
        startButton.anchor.setTo(0.5)
        //startButton.useHandCursor = true;
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