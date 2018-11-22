
/**
 * runAllTests tests all the functionalities of runAllTests.js
 */

var runTestsState = {
    create: function () {
        testConfig.runAllTests();
        testGameLoop.runAllTests();
        // TODO: fill in more tests for other JS files

        // continue to loading game if all tests passed
        game.state.start("boot"); //Thanks Hong :D
    }
};