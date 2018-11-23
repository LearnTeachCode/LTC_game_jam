var loadState = {

    preload: function () {

        /*
        Load all game assets
        Place your load bar, some messages.
        In this case of loading, only text is placed...
        */

        var loadingLabel = game.add.text(config.loader.x, config.loader.y, config.loader.text, {font: '30px Courier', fill: '#fff'});

        //Load your images, spritesheets, bitmaps...
        game.load.image('boiler-logo', config.loader.logo);
        game.load.image('player', config.loader.playerImage);
        game.load.image(config.neutralMap.mapLabel, config.loader.mapImage);

        //Load your sounds, efx, music...
        //Example: game.load.audio('rockas', 'assets/snd/rockas.wav');
        // game.load.audio(config.loadingScreen.bgm.label, config.loadingScreen.bgm.file);
        test_audio = game.load.audio(config.loadingScreen.bgm.label, [config.loadingScreen.bgm.mp3file, config.loadingScreen.bgm.oggfile]);
        //game.load.audio('boden', ['assets/audio/bodenstaendig_2000_in_rock_4bit.mp3', 'assets/audio/bodenstaendig_2000_in_rock_4bit.ogg']);
        //Load your data, JSON, Querys...
        //Example: game.load.json('version', 'http://phaser.io/version.json');

    },

    create: function () {
        game.stage.setBackgroundColor('#000');
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.state.start('menu');
    }
};
