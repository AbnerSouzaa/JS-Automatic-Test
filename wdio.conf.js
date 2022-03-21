exports.config = {
    services: [
      ['appium', {
        command : 'appium'
      }]
    ],
    port: 4723,
    runner: 'local',
  
    //android
    specs: [
      './teste/integration/authentication.test.js'
    ],
  
    capabilities: [{
        maxInstances: 1,
        browserName: '',
        appiumVersion: '1.22.0',
  
        //android
        platformName: "iOS",
        platformVersion: "15.0",
        deviceName: "iPhone 11",
        app: "/Users/abnersouza/Library/Developer/Xcode/DerivedData/Hope-enauqpxrtsaqwwaagjnvfgjgwriy/Build/Products/Debug-iphonesimulator/Hope.app",
        automationName: "XCUITest",
  
     }],
  
  
    logLevel: 'trace',
    bail: 0,
    waitforTimeout: 60000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    maxConnections: 4,
    framework: 'mocha',
    reporters: [['allure', {
        outputDir: 'allure-results',
      }]],
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    }
  }
  