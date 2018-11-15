var menuState = {

    create: function () {

        game.add.plugin(Phaser.Plugin.Debug);
        game.add.plugin(Phaser.Plugin.Inspector);
        game.add.plugin(PhaserSuperStorage.StoragePlugin);
        game.add.plugin(PhaserInput.Plugin);
        
        //game.add.sprite(95, 150, 'boiler-logo');
        game.add.sprite(95, 150, neutral_map_label);

    }

};
