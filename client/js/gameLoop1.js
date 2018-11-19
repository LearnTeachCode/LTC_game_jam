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
        player.body.collideWorldBounds=true;
    },

    render: function() {
        game.debug.inputInfo(32, 32);
        game.debug.spriteInputInfo(player, 300, 32);
        },

    update: function() {
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
        {
            player2.x -= 16;
            player.x -= 16;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
        {
            player2.x += 16;
            player.x += 16;
        }
        else if (game.input.mousePointer.isUp)
        {
//            moveToXY(displayObject, x, y, speed, maxTime)
            game.physics.arcade.moveToXY(player, game.input.mousePointer.x, player.y, 300, 50);
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
