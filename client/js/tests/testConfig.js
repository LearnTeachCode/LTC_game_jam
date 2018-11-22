
/**
 * testConfig tests all the functionalities of config.js
 */

const testConfig = {};

testConfig.testConfigInit = () => {
    /**
     * Syntax for assert equal is generally: assert.equal(value1, value2, "Some Error Message");
     * Other test libraries may be different, unitjs library makes unitjs a global variable, thus the syntax is:
     * unitjs.assert.equal(value1, value2, "Some Error Message");
     * Typically, we determine what the expected outcome is, then compare it with the actual value from running the process.
     * Having end point from functions makes creating these tests much easier.
     * If test fails, then it will raise an error and stop the rest of the program.
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