var loadState = {

    preload: function () {

        /*
        Load all game assets
        Place your load bar, some messages.
        In this case of loading, only text is placed...
        */

        var loadingLabel = game.add.text(config.loader.x, config.loader.y, config.loader.text, {font: '30px Courier', fill: '#fff'});

        //Load your images, spritesheets, bitmaps...
        // Menu loads
        game.load.image(config.default.menuBackground.imageKey, config.default.menuBackground.spriteSrc);
        game.load.image(config.default.startButton.imageKey, config.default.startButton.spriteSrc);
        // Game loop loads
        game.load.image('player', config.loader.playerImage);
        game.load.image(config.neutralMap.mapLabel, config.loader.mapImage);
        // Game over loads
        game.load.image(config.default.restartButton.imageKey, config.default.restartButton.spriteSrc);

        //Load your sounds, efx, music...
        //Example: game.load.audio('rockas', 'assets/snd/rockas.wav');
        game.load.audio(config.loader.bgm.label, [config.loader.bgm.mp3file, config.loader.bgm.oggfile]);

        //Load your data, JSON, Querys...
        //Example: game.load.json('version', 'http://phaser.io/version.json');

    },

    create: function () {
        game.stage.setBackgroundColor('#000');
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.state.start('menu');
    }
};
