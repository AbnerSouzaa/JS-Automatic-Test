const wdio = require("webdriverio");
const { default: $ } = require("webdriverio/build/commands/browser/$");
const { default: $$ } = require("webdriverio/build/commands/browser/$$");
const { default: click } = require("webdriverio/build/commands/element/click");
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


// -- MARK: FILTER CARDS (revisar)

// async function filterCards() {
//   const client = await wdio.remote(opts);

//   const email = await client.$('#emailTextField');
//   await email.setValue("code@gmail.com");
//   const password = await client.$('#passwordTextField');
//   await password.setValue("123456");
//   const login = await client.$('#loginButton');
//   await login.click();

//   const filterButton = await client.$('#filter');
//   await filterButton.click();

//   const filterOption = await client.$('#filterOption');
//   await filterOption.click();

//   // await client.deleteSession();
// }

async function updateProfile() {
  const client = await wdio.remote(opts);

  const email = await client.$('#emailTextField');
  await email.setValue("automatictest@gmail.com");
  const password = await client.$('#passwordTextField');
  await password.setValue("123456");
  const login = await client.$('#loginButton');
  await login.click();

  const profileButton = await client.$('#profileButton').click();
  const age = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[3]/XCUIElementTypeOther[3]/XCUIElementTypeTextField'); 
  await age.setValue("20");
  const cep = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[3]/XCUIElementTypeOther[2]/XCUIElementTypeTextField'); 
  await cep.setValue("58046700");
  const lastName = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeTextField'); 
  await lastName.setValue(faker.name.firstName());
  const nameProfile = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeTextField'); 
  await nameProfile.setValue(faker.name.lastName());
  const emailProfile = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[1]/XCUIElementTypeTextField'); 
  await emailProfile.setValue("automatictest@gmail.com");
  const image = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeButton[3]').click();
  const biblioteca = await client.$('//XCUIElementTypeButton[@name="Biblioteca"]').click();
  const imagePicker = await client.$('//XCUIElementTypeImage[@name="Photo, August 08, 2012, 6:55 PM"]').click();
  await client.$('//XCUIElementTypeStaticText[@name="Choose"]').waitForDisplayed(6000);
  const done = await client.$('//XCUIElementTypeStaticText[@name="Choose"]').click();
  const attData = await client.$('//XCUIElementTypeButton[@name="ATUALIZAR DADOS"]').click();

  await client.$("#label").waitForDisplayed(6000);
  
  const att = await client.$("#label").getText();
  await expect(att).to.equal('Dados atualizados com sucesso!');
  await browser.pause(1000);
}


async function likingCard() {
  const client = await wdio.remote(opts);

  const email = await client.$('#emailTextField');
  await email.setValue("code@gmail.com");
  const password = await client.$('#passwordTextField');
  await password.setValue("123456");
  const login = await client.$('#loginButton');
  await login.click();

  const likeButton = await client.$('#likeButton');
  await likeButton.click();

  const likeButton2 = await client.$('#likeButton');
  await likeButton2.click();

  const likeButtonComunidade = await client.$('#likeButton2');
  await likeButtonComunidade.click();
  
  // await client.deleteSession();
}

// async function filterCommunity() {
//   const client = await wdio.remote(opts);

//   const email = await client.$('#emailTextField');
//   await email.setValue("code@gmail.com");
//   const password = await client.$('#passwordTextField');
//   await password.setValue("123456");
//   const login = await client.$('#loginButton');
//   await login.click();

//   const community = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeButton[3]');
//   await community.click();


//   await $('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeCollectionView/XCUIElementTypeCell[1]/XCUIElementTypeOther/XCUIElementTypeOther').click();
//   await browser.pause(1000);
//   let status = await $("#User").isExisting()
//   expect(status).to.equal(true);
    
//   await $('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeCollectionView/XCUIElementTypeCell[2]/XCUIElementTypeOther/XCUIElementTypeOther').click();
//   await browser.pause(1000);
//   status = await $("#User").isExisting()
//   expect(status).to.equal(true);
    
//   await $('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeCollectionView/XCUIElementTypeCell[3]/XCUIElementTypeOther/XCUIElementTypeOther').click();
//   await browser.pause(1000);
//   status = await $("#User").isExisting()
//   expect(status).to.equal(true);
      
//   await browser.pause(1000);
// }

async function addBadgeRelapses() {
  const client = await wdio.remote(opts);

  const email = await client.$('#emailTextField');
  await email.setValue("code@gmail.com");
  const password = await client.$('#passwordTextField');
  await password.setValue("123456");
  const login = await client.$('#loginButton');
  await login.click();

  const relapses = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeButton[5]');
  await relapses.click();

  const badge = await client.$('#buttonRelapses');
  await badge.click();

  const text = await client.$('#typeHere');
  await text.setValue("teste");

  const send = await client.$('#send');
  await send.click();

  const message = await client.$('#Message').getText();
  await expect(message).to.equal('teste');
  await browser.pause(1000);
  
  // await client.deleteSession();
}

async function homeTalkToSpecialist() {
  const client = await wdio.remote(opts);

  const email = await client.$('#emailTextField');
  await email.setValue("code@gmail.com");
  const password = await client.$('#passwordTextField');
  await password.setValue("123456");
  const login = await client.$('#loginButton');
  await login.click();

  const talk = await client.$('#TalkSpecialist');
  await talk.click();
  const type = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeTextField');
  await type.setValue("teste");
  const send = await client.$('//XCUIElementTypeButton[@name="ic send"]');
  await send.click();
  const backButton = await client.$('//XCUIElementTypeButton[@name="ic back"]');
  await backButton.click();

  const chat = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeButton[2]');
  await chat.click();
  const message = await client.$('#Message').getText();
  await expect(message).to.equal('teste');
  await browser.pause(1000);
  // await client.deleteSession();
}

async function talkToSpecialistByCommunity() {
  const client = await wdio.remote(opts);

  const email = await client.$('#emailTextField');
  await email.setValue("code@gmail.com");
  const password = await client.$('#passwordTextField');
  await password.setValue("123456");
  const login = await client.$('#loginButton');
  await login.click();

  const community = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeButton[3]');
  await community.click();
  const specialist = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[9]/XCUIElementTypeOther[1]/XCUIElementTypeOther');
  await specialist.click();
  const talk = await client.$('#talkToSpecialist');
  await talk.click();
  const type = await client.$('#typeHereChat');
  await type.setValue("teste");
  const send = await client.$('#sendButton');
  await send.click();
  const backButton = await client.$('//XCUIElementTypeButton[@name="ic back"]');
  await backButton.click();
  const closebutton = await client.$('#closeButton');
  await closebutton.click();
  const home = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeButton[1]');
  await home.click();
  // await client.deleteSession();
}

async function notifications() {
  const client = await wdio.remote(opts);

  const email = await client.$('#emailTextField');
  await email.setValue("code@gmail.com");
  const password = await client.$('#passwordTextField');
  await password.setValue("123456");
  const login = await client.$('#loginButton');
  await login.click();

  const notifications = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeButton[6]');
  await notifications.click();

  const home = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeButton[1]');
  await home.click();

  // await client.deleteSession();
}

// async function sendMessageChat() {
//   const client = await wdio.remote(opts);

//   const email = await client.$('#emailTextField');
//   await email.setValue("code@gmail.com");
//   const password = await client.$('#passwordTextField');
//   await password.setValue("123456");
//   const login = await client.$('#loginButton');
//   await login.click();

//   const chat = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeButton[2]');
//   await chat.click();
//   const buttonChat = await client.$('//XCUIElementTypeButton[@name="ic new msg"]');
//   await buttonChat.click();
//   const duvidas = await client.$('//XCUIElementTypeApplication[@name="Hope"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther');
//   await duvidas.click();
//   const responder = await client.$('//XCUIElementTypeStaticText[@name="RESPONDER"]');
//   await responder.click();
//   await client.$("#typeHereChat").waitForDisplayed(5000000000);
//   const type = await client.$('#typeHereChat');
//   await type.setValue("teste");
//   const send = await client.$('#sendButton');
//   await send.click();
//   const backButton = await client.$('//XCUIElementTypeButton[@name="ic back"]');
//   await backButton.click();
//   const backButton2 = await client.$('//XCUIElementTypeButton[@name="ic back"]');
//   await backButton2.click();

//   // await client.deleteSession();
// }

updateProfile()
