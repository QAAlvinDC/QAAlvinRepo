
const { test, expect } = require('@playwright/test');
const { LoginAdmin } = require('../../projectobjects/LoginAdmin');


test('Add New Profile', async ({ page }) => {

    const loginAdmin = new LoginAdmin(page);
    await loginAdmin.goTo();
    await loginAdmin.validLogin();

    const BizBoxPS = await page.locator("[class='MuiTypography-root MuiTypography-h1 css-15lekbi']");
    await expect(BizBoxPS).toHaveText('Bizbox Profiling System');
    await page.waitForTimeout(5000);
    
    const homeButton = await page.locator("[href='/'] [role = 'button']");
    await expect(homeButton).toBeVisible();
    await expect (homeButton).toHaveText('Home');
    await homeButton.click();

    const LogOutButton = await page.locator("div[class='MuiListItemText-root css-phjcjn'] span[class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-yb0lig']");
    await expect (LogOutButton).toBeVisible();
    await expect (LogOutButton).toBeEnabled();
    await expect (LogOutButton).toHaveText("Log out");
    LogOutButton.click();

    const LoginPage = await page.locator(".MuiTypography-root.MuiTypography-h1.styles_title__lOUL6.css-15lekbi");
    await expect (LoginPage).toBeVisible();
    await expect (LoginPage).toBeEnabled();
    await expect (LoginPage).toHaveText("Login");

    const UsernameInput = await page.locator("[id ='email']");  
    await expect(UsernameInput).toHaveValue("ALVIN");
    await page.waitForTimeout(3000);

});
