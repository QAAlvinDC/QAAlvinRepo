class LoginAdmin {
    constructor(page) {
        this.page = page;
   
        this.userName = page.locator('#email');
        this.passWord = page.locator('#password');
        this.RememberMe = page.locator("//input[@type='checkbox']");
        this.loginButton = page.locator("button[type='submit']");

        this.username = 'ALVIN';
        this.password = 'abcdE1234';
    }

    async goTo() {
        await this.page.goto('https://bpsweb-dev.azurewebsites.net/auth/sign-in');
    }

    async validLogin() {
        await this.userName.fill(this.username);
        await this.page.waitForTimeout(3000);
        await this.passWord.fill(this.password);
        await this.page.waitForTimeout(3000);
        await this.RememberMe.check();
        await this.page.waitForTimeout(3000);
        await this.loginButton.click();
    }
}

module.exports = { LoginAdmin };
