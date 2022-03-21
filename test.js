var expect = require('chai').expect;

describe('Testes de autenticação/registro', () => {

  before(() => {
    browser.pause(1000);
  });

  it('Autenticação sucesso', async() => {
    await authSuccess();
  });
});

const authSuccess =  async () => {
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

}