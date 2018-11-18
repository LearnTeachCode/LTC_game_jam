var gameLoop1State = {
    preload: function() {
        game.load.image('placeholder', 'assets/img/placeholder.png');
    },
    create: function () {
        player = game.add.image(310, 400, 'placeholder');
        player2 = game.add.image(100, 100, 'boiler-logo')
        player.anchor.setTo(0.5, 0.5);
        game.physics.enable(player, Phaser.Physics.ARCADE);
    },

    update: function() {
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
        {
            player2.x -= 8;
            player.x -= 8;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
        {
            player2.x += 8;
            player.x += 8;
        }
        }
};
