game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('gameLoop', gameLoop);
game.state.add('end', gameOverState);
game.state.start('boot'); //Thanks Hong :D
