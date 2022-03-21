const wdio = require("webdriverio");
const { default: $ } = require("webdriverio/build/commands/browser/$");
const { default: $$ } = require("webdriverio/build/commands/browser/$$");
var expect = require('chai').expect;

const {
  authFail,
  authComunicador,
  authDependente,
  authEspecialista,
  authExdependente,
  // authSuccess,
  authAnon
} = require('../utils/authentication.test.js');

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    maxInstances: 1,
    browserName: '',
    appiumVersion: '1.22.0',

    "platformName": "iOS",
    "platformVersion": "15.0",
    "deviceName": "iPhone 11",
    "app": "/Users/abnersouza/Library/Developer/Xcode/DerivedData/Hope-enauqpxrtsaqwwaagjnvfgjgwriy/Build/Products/Debug-iphonesimulator/Hope.app",
    "automationName": "XCUITest",
  }
};
const opts2 = {
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




describe('Testes de autenticação/registro', () => {
  before(() => {
    browser.pause(1000);
  });

  it('Esqueceu senha', async () => {
    await forgotPassword();
  });

  it('Autenticação inválida', async () => {
    await authFail();
  });

  it('Autenticação anônimo', async () => {
    await authAnon();
  });
/*
  it('Autenticação sucesso Admin', async () => {
    await authSuccessAdm();
  });
*/
  it('Autenticação sucesso Dependente', async () => {
    await authDependente();
  });

  // it('Autenticação sucesso Codependente', async () => {
  //   await authSuccess();
  // });

  it('Autenticação sucesso Ex-dependente', async () => {
    await authExdependente();
  });

  // it('Autenticação sucesso Especialista pendente', async () => {
  //   await authSuccessEspPend();
  // });

  it('Autenticação sucesso Especialista liberado', async () => {
    await authEspecialista();
  });

  it('Autenticação sucesso Comunicador', async () => {
    await authComunicador();
  });
});
