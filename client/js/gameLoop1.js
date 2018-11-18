var gameLoop1State = {
    preload: function() {
        game.load.image('placeholder', 'assets/img/placeholder.png');
    },

    create: function () {
        player = game.add.sprite(310, 400, 'placeholder');
        player2 = game.add.sprite(100, 100, 'boiler-logo')
        player.anchor.setTo(0.5, 0.5);
        game.physics.enable(player, Phaser.Physics.ARCADE);
        player.inputEnabled = true;
//        player.input.enableDrag();
//        player.input.allowVerticalDrag = false;
    },

    render: function() {
        game.debug.inputInfo(32, 32);
        game.debug.spriteInputInfo(player, 300, 32);
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
        else if (game.input.mousePointer.isDown)
        {
            game.physics.arcade.moveToPointer(player, 400);
            if (Phaser.Rectangle.contains(player.body, game.input.x, game.input.y))
            {
            player.body.velocity.setTo(0, 0);
            }
        }
        else
        {
            player.body.velocity.setTo(0, 0);
        }
        }
};
