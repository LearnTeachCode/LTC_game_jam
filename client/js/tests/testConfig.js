
/**
 * testConfig tests all the functionalities of config.js
 */

const testConfig = {};

testConfig.testConfigInit = () => {
    /**
     * Typical setup for assert equals test:
     * setup expected:              $ expected = ...
     * setup actual:                $ actual = ...
     * (Optional) setup message:    $ errorMessage = "ERROR!!!!!!!!!!!!!!!!!!!!!!"
     * Run assert equals test:      $ unitjs.assert.equals(expected, actual, errorMessage)
     * 
     * If test fails, then it will raise an error and stop the rest of the program.
     * 
     * Note: Having end point from functions makes creating these tests much easier.
     */

     // test config init values
    let expected = 640;         // current default value: 640
    let actual = config.init.screenWidth;
    let errorMessage = "TestConfigInit failed! Config.init.screenWidth not equal to ";
    errorMessage += expected;   // structuring errorMessage before finally calling assert function
    unitjs.assert.equal(actual, expected, errorMessage);

    // code can be reduced
    expected = 480;             // current default value: 480
    unitjs.assert.equal(config.init.screenHeight, expected, "TestConfigInit failed! Config.init.screenHeight not equal to " + expected);
}

testConfig.testConfigLoader = () => {
    // test config loader values
}

testConfig.testConfigPlayer = () => {
    // test config player values

}

testConfig.testConfigNeutralMap = () => {
    // test config neutralmap values

}

testConfig.runAllTests = () => {
    testConfig.testConfigInit();
    testConfig.testConfigLoader();
    testConfig.testConfigPlayer();
    testConfig.testConfigNeutralMap();
}