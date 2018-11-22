game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('gameLoop', gameLoop);
game.state.add('end', gameOverState);
game.state.add('tests', runTestsState);

game.state.start('tests');
//game.state.start("boot"); //Thanks Hong :D