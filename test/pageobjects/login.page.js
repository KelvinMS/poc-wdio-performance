

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('//b[contains(.,"Log in")]');
    }

    get lblAssertionElement () {
        return $('#divOrderProgressBar_144894688_12073');
    }

    get lblAccounEmail () {
        return $("//p[contains(text(),'Account’s emails')]");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open (path) {
        return super.open(`${path}`);
    }
}

module.exports = new LoginPage();
