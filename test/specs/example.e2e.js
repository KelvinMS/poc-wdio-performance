const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const { performancetotal } = require ("wdio-performancetotal-service")

describe('My Login application', () => {
    it('Performance Login', async () => {
        await browser.url("")
        performancetotal.sampleStart("Login Session");
        await LoginPage.login('', '')
        performancetotal.sampleEnd("Login Session");
        await expect(LoginPage.lblAssertionElement).toBeDisplayed();
    })
    it('Performance Credit Tools', async ()=> {
        performancetotal.sampleStart("Credit Tools");
        await browser.url("https://www.farfetch-apps.com/creditstool");
        await expect(LoginPage.lblAccounEmail).toBeDisplayed();
        performancetotal.sampleEnd("Credit Tools");
    })
})


