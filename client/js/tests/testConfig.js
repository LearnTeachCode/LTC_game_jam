
/**
 * testConfig tests all the functionalities of config.js
 */

const testConfig = {};

testConfig.testConfigInit = () => {
    // test config init values
    let expected = 640;     // current default value: 640
    unitjs.assert.equal(config.init.screenWidth, expected, "TestConfigInit failed! Config.init.screenWidth not equal to " + expected);
    expected = 480;     // current default value: 480
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