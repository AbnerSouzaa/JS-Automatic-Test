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

  await formLabel.click();

  const finishButton = await client.$('#finishButton');
  finishButton.click();

  await client.$("#errorLabel").waitForDisplayed(6000);

  const status = await client.$("#errorLabel").getText();

  await expect(status).to.equal('Digite seu CEP');
  await client.deleteSession();
}


async function registerFailZipCode() {
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
    await zipCode.setValue('58');
    await formLabel.click();
  
    const finishButton = await client.$('#finishButton');
    finishButton.click();
  
    await client.$("#errorLabel").waitForDisplayed(6000);
  
    const status = await client.$("#errorLabel").getText();
  
    await expect(status).to.equal('CEP inválido');
    await client.deleteSession();
}


async function registerFailEmail() {
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
    await email.setValue('iostests');
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
  
    await expect(status).to.equal('Texto não é um Email válido');
    await client.deleteSession();
}


async function registerFailCPF() {
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
    await email.setValue('iostests@appium.com.br');
    const password = await client.$('#password');
    await password.setValue('iostest123');
    const confirmPassword = await client.$('#confirmPassword');
    await confirmPassword.setValue('iostest123');
    const age = await client.$('#age');
    await age.setValue('18');
    const cpf = await client.$('#cpf');
    await cpf.setValue('40174274');
    const formLabel = await client.$('#formLabel');
    formLabel.click();
    const zipCode = await client.$('#zipCode');
    await zipCode.setValue('58025510');

    await formLabel.click();
  
    const finishButton = await client.$('#finishButton');
    finishButton.click();
  
    await client.$("#errorLabel").waitForDisplayed(6000);
  
    const status = await client.$("#errorLabel").getText();
  
    await expect(status).to.equal('CPF inválido');
    await client.deleteSession();
}

async function registerSucess() {
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

  await formLabel.click();

  const finishButton = await client.$('#finishButton');
  finishButton.click();

  await client.$("#errorLabel").waitForDisplayed(6000);

  const status = await client.$("#errorLabel").getText();

  await expect(status).to.equal('Digite seu CEP');
  await client.deleteSession();
}



async function registerCodependente() {
  const client = await wdio.remote(opts);

  const signUpButton = await client.$('#signUpButton');
  signUpButton.click();

  const firstOption = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther')
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
  await name.setValue(faker.name.firstName());
  const lastname = await client.$('#lastName');
  await lastname.setValue(faker.name.lastName());
  const email = await client.$('#email');
  await email.setValue(faker.internet.email());
  const password = await client.$('#password');
  await password.setValue('123456');
  const confirmPassword = await client.$('#confirmPassword');
  await confirmPassword.setValue('123456');
  const age = await client.$('#age');
  await age.setValue('18');
  const cpf = await client.$('#cpf');
  await cpf.setValue(faker.br.cpf());
  const formLabel = await client.$('#formLabel');
  formLabel.click();
  const zipCode = await client.$('#zipCode');
  await zipCode.setValue(faker.address.zipCodeValid());

  await formLabel.click();

  const finishButton = await client.$('#finishButton');
  finishButton.click();
  // await client.deleteSession();
}


async function registerExdependente() {
  const client = await wdio.remote(opts);

  const signUpButton = await client.$('#signUpButton');
  signUpButton.click();

  const firstOption = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[3]/XCUIElementTypeOther[1]/XCUIElementTypeOther')
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
  await email.setValue('iostestsappium2@appium.com');
  
  const password = await client.$('#password');
  await password.setValue('123456');
  
  const confirmPassword = await client.$('#confirmPassword');
  await confirmPassword.setValue('123456');

  const age = await client.$('#age');
  await age.setValue('18');

  const cpf = await client.$('#cpf');
  await cpf.setValue('68565144097');

  const formLabel = await client.$('#formLabel');
  formLabel.click();

  const zipCode = await client.$('#zipCode');
  await zipCode.setValue('58025510');

  await formLabel.click();

  const finishButton = await client.$('#finishButton');
  finishButton.click();
  // await client.deleteSession();
}

// async function registerEspecialista() {
//   const client = await wdio.remote(opts);

//   const signUpButton = await client.$('#signUpButton');
//   signUpButton.click();

//   const firstOption = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[4]/XCUIElementTypeOther[1]/XCUIElementTypeOther').click();

//   const nextQuestion = await client.$('#nextQuestionButton').click();

//   const Selecionar = await client.$('//XCUIElementTypeTextField[@name="Selecionar"]').click()
  
//   const Medico = await client.$('/XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow[3]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2').click()


// }

async function registerCommunicator() {
  const client = await wdio.remote(opts);

  const signUpButton = await client.$('#signUpButton');
  signUpButton.click();

  const firstOption = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[5]/XCUIElementTypeOther[1]/XCUIElementTypeOther').click();
  const nextQuestion = await client.$('#nextQuestionButton').click();
  const identidade = await client.$('//XCUIElementTypeButton[@name="photo"]').click()
  const entendi = await client.$('//XCUIElementTypeButton[@name="ENTENDI"]').click()
  await client.$('//XCUIElementTypeImage[@name="Photo, August 08, 2012, 6:55 PM"]').waitForDisplayed(600000);
  const photo = await client.$('//XCUIElementTypeImage[@name="Photo, August 08, 2012, 6:55 PM"]').click()
  const chose = await client.$('//XCUIElementTypeStaticText[@name="Choose"]').click();
  const text = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeTextField').click();
  await text.setValue("teste");
  const continueButton = await client.$('//XCUIElementTypeButton[@name="Done"]').click();

  await $("#name").setValue(faker.name.firstName());
  await $("#lastName").setValue(faker.name.lastName());
  await $("#email").setValue(faker.internet.email());
  await $("#password").setValue("123456");
  await $("#confirmPassword").setValue("123456");
  await $("#age").setValue(faker.random.number());
  await $("#cpf").setValue(faker.br.cpf());
  await $("#zipCode").setValue(faker.address.zipCodeValid());
  await $("~end-register").click();
}

registerCodependente();