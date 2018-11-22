
/**
 * testConfig tests all the functionalities of config.js
 */

const testConfig = {};

testConfig.testConfigInit = () => {
    // test config init values

    // syntax for assert equal: assert.equal(value1, value2, "Some Error Message");
    // if test fails, then it will raise an error and stop the rest of the program
    let expected = 640;     // current default value: 640
    let actual = config.init.screenWidth;
    unitjs.assert.equal(actual, expected, "TestConfigInit failed! Config.init.screenWidth not equal to " + expected);

    // code can be reduced 
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