const wdio = require("webdriverio");
const { default: $ } = require("webdriverio/build/commands/browser/$");
const { default: $$ } = require("webdriverio/build/commands/browser/$$");
var expect = require('chai').expect;
var faker = require('faker-br');

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    "platformName": "iOS",
    "platformVersion": "15.0",
    "deviceName": "iPhone 11",
    "app": "/Users/abnersouza/Library/Developer/Xcode/DerivedData/Hope-enauqpxrtsaqwwaagjnvfgjgwriy/Build/Products/Debug-iphonesimulator/Hope.app",
    "automationName": "XCUITest",
  }
};


// -- MARK: FAILURE AUTHENTICATION TEST

const authFail = async () => {

  const client = await wdio.remote(opts);
  const email = await client.$('#emailTextField')
  await email.setValue("m.clarasl@hotmail.com");
  const password = await client.$('#passwordTextField')
  await password.setValue("senhaerrada")
  const login = await client.$('#loginButton')
  login.click();
  const status = await client.$('#errorLabel').getText();
  await expect(status).to.equal('Senha errada');
  await browser.pause(1000);
}



// -- MARK: SUCCESSFULLY AUTHENTICATION TEST

async function authSuccess() {
  const client = await wdio.remote(opts);

  const email = await client.$('#emailTextField')
  await email.setValue("code@gmail.com");

  const password = await client.$('#passwordTextField')
  await password.setValue("123456")

  const login = await client.$('#loginButton')
  login.click();

  await client.$("#helloLabel").waitForDisplayed(6000);

  const status = await client.$("#helloLabel").getText();

  await expect(status).to.equal('Olá, code');
  await browser.pause(1000);
}



async function authDependente() {
  const client = await wdio.remote(opts);

  const email = await client.$('#emailTextField')
  await email.setValue("dependentehope@gmail.com");

  const password = await client.$('#passwordTextField')
  await password.setValue("dependente_1")

  const login = await client.$('#loginButton')
  login.click();

  await client.$("#helloLabel").waitForDisplayed(6000);

  const status = await client.$("#helloLabel").getText();

  await expect(status).to.equal('Olá, Dependente');
  await browser.pause(1000);
}




async function authExdependente() {
  const client = await wdio.remote(opts);

  const email = await client.$('#emailTextField')
  await email.setValue("exdependentehope@gmail.com");

  const password = await client.$('#passwordTextField')
  await password.setValue("123456")

  const login = await client.$('#loginButton')
  login.click();

  await client.$("#helloLabel").waitForDisplayed(6000);

  const status = await client.$("#helloLabel").getText();

  await expect(status).to.equal('Olá, Jonas');
  await browser.pause(1000);
}




async function authEspecialista() {
  const client = await wdio.remote(opts);

  const email = await client.$('#emailTextField')
  await email.setValue("mohamed@teste.com");

  const password = await client.$('#passwordTextField')
  await password.setValue("123456")

  const login = await client.$('#loginButton')
  login.click();

  await client.$("#helloLabel").waitForDisplayed(6000);

  const status = await client.$("#helloLabel").getText();

  await expect(status).to.equal('Olá, Mohamed');
  await browser.pause(1000);
}




async function authComunicador() {
  const client = await wdio.remote(opts);

  const email = await client.$('#emailTextField')
  await email.setValue("comunicadorhope@gmail.com");

  const password = await client.$('#passwordTextField')
  await password.setValue("123456")

  const login = await client.$('#loginButton')
  login.click();

  await client.$("#helloLabel").waitForDisplayed(6000);

  const status = await client.$("#helloLabel").getText();

  await expect(status).to.equal('Olá, Suécia');
  await browser.pause(1000);
}




// -- MARK: AUTHENTICATION ANONYMOUSLY TEST

async function authAnon() {
  const client = await wdio.remote(opts);

  const anonButton = await client.$('#loginAnonymousButton')
  anonButton.click();

  await client.$("#helloLabel").waitForDisplayed(6000);

  const status = await client.$("#helloLabel").getText();

  await expect(status).to.equal('Bem-vindo');
  await browser.pause(1000);
}



// -- MARK: FORGOT PASSWORD TEST

async function forgotPassword() {
  const client = await wdio.remote(opts);

  const forgotButton = await client.$('#forgotPasswordButton');
  await forgotButton.click();

  await client.$('#emailTextField').waitForDisplayed(5000);

  const emailTextField = await client.$('#emailTextField');
  await emailTextField.setValue("teste@hotmail.com");

  const forgotScreen = await client.$('#forgotScreen');
  forgotScreen.click();

  const sendButton = await client.$("#sendButton");
  sendButton.click();

  await client.$("#changeScreen").waitForDisplayed(11000);
  const backButton = await client.$("#backButton");
  backButton.click();

  await client.$('#forgotScreen').waitForDisplayed(11000);
  const backToLoginButton = await client.$("#backToLoginButton");
  backToLoginButton.click();

  await client.$("#loginScreen").waitForDisplayed(11000);

  await browser.pause(1000);
}




async function registerSuccess() {
  const client = await wdio.remote(opts);

  const signUpButton = await client.$('#signUpButton');
  signUpButton.click();

  const firstOption = await client.$('#typeOption')
  await firstOption.click();

  const nextQuestion = await client.$('#nextQuestionButton');
  nextQuestion.click();

  await client.$("#questionTwo").waitForDisplayed(6000);

  const secondOption = await client.$('#questionTwoOption');
  await secondOption.click();

  const nextQuestionTwo = await client.$('#nextQuestion2Button');
  nextQuestionTwo.click();

  await client.$("#questionThree").waitForDisplayed(6000);
  
  const numberTextField = await client.$('#numberTextField');
  await numberTextField.setValue('15');

  const questionThree = await client.$("#questionThree")
  questionThree.click();

  const nextQuestionThree = await client.$('#nextQuestion3');
  nextQuestionThree.click();

  await client.$("#questionFour").waitForDisplayed(6000);

  const questionFourType = await client.$('#questionFourType');
  questionFourType.click();

  const nextQuestionFour = await client.$('#nextQuestion4');
  nextQuestionFour.click();

  
  await client.$('#registerScreen').waitForDisplayed(11000);

  const name = await client.$('#name');
  await name.setValue('teseiOSS');

  const lastname = await client.$('#lastName');
  await lastname.setValue('iOS');
  
  const email = await client.$('#email');
  await email.setValue('iostestsappium@appium.com');
  
  const password = await client.$('#password');
  await password.setValue('123456');
  
  const confirmPassword = await client.$('#confirmPassword');
  await confirmPassword.setValue('123456');

  const age = await client.$('#age');
  await age.setValue('18');

  const cpf = await client.$('#cpf');
  await cpf.setValue('84036595040');

  const formLabel = await client.$('#formLabel');
  formLabel.click();

  const zipCode = await client.$('#zipCode');
  await zipCode.setValue('58025510');

  await formLabel.click();

  const finishButton = await client.$('#finishButton');
  finishButton.click();
  await browser.pause(1000);
}


async function registerFail() {
  const client = await wdio.remote(opts);

  const signUpButton = await client.$('#signUpButton');
  signUpButton.click();

  const firstOption = await client.$('#typeOption')
  await firstOption.click();

  const nextQuestion = await client.$('#nextQuestionButton');
  nextQuestion.click();

  await client.$("#questionTwo").waitForDisplayed(6000);

  const secondOption = await client.$('#questionTwoOption');
  await secondOption.click();

  const nextQuestionTwo = await client.$('#nextQuestion2Button');
  nextQuestionTwo.click();

  await client.$("#questionThree").waitForDisplayed(6000);
  
  const numberTextField = await client.$('#numberTextField');
  await numberTextField.setValue('15');

  const questionThree = await client.$("#questionThree")
  questionThree.click();

  const nextQuestionThree = await client.$('#nextQuestion3');
  nextQuestionThree.click();

  await client.$("#questionFour").waitForDisplayed(6000);

  const questionFourType = await client.$('#questionFourType');
  questionFourType.click();

  const nextQuestionFour = await client.$('#nextQuestion4');
  nextQuestionFour.click();

  
  await client.$('#registerScreen').waitForDisplayed(11000);

  const name = await client.$('#name');
  await name.setValue('Appium');

  const lastname = await client.$('#lastName');
  await lastname.setValue('iOS');
  
  const email = await client.$('#email');
  await email.setValue('iostests@appium.com');
  
  const password = await client.$('#password');
  await password.setValue('iostest123');
  
  const confirmPassword = await client.$('#confirmPassword');
  await confirmPassword.setValue('iostest123');

  const age = await client.$('#age');
  await age.setValue('18');

  const cpf = await client.$('#cpf');
  await cpf.setValue('40174274050');

  const formLabel = await client.$('#formLabel');
  formLabel.click();

  const zipCode = await client.$('#zipCode');
  await zipCode.setValue('58025510');

  await formLabel.click();

  const finishButton = await client.$('#finishButton');
  finishButton.click();

  await client.$("#errorLabel").waitForDisplayed(6000);

  const status = await client.$("#errorLabel").getText();

  await expect(status).to.equal('Email já cadastrado');
  await browser.pause(1000);
}

authDependente();

module.exports = {
  authFail,
  authSuccess,
  authDependente,
  authExdependente,
  authEspecialista,
  authComunicador,
  authAnon,
  forgotPassword,
  registerSuccess,
  registerFail,
  
 };