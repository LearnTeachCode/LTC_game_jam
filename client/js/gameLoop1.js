var gameLoop1State = {

    create: function () {
        var cursors;
        cursors = game.input.keyboard.createCursorKeys()
        player = game.add.image(310, 400, 'placeholder');
        player.anchor.setTo(0.5, 0.5);
        game.physics.enable(player, Phaser.Physics.ARCADE);
    }
};
//function update() {
//          Reset the player, then check for movement keys
//        player.body.velocity.setTo(0, 0);
//
//        if (cursors.left.isDown)
//        {
//            player.body.velocity.x = -200;
//        }
//        else if (cursors.right.isDown)
//        {
//            player.body.velocity.x = 200;
//        }
//        }
