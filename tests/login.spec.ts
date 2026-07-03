/**
 * Test Case: Login with Valid Credentials
 *
 * Tags: @master @sanity @regression
 *
 * Steps:
 * 1) Navigate to the application URL
 * 2) Navigate to Login page via Home page
 * 3) Enter valid credentials and log in
 * 4) Verify successful login by checking 'My Account' page presence
 */

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { TestConfig } from '../test.config';

let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;
let config: TestConfig;
let MyAccountPPage:MyAccountPage;
//hooks before run each test cases
test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl); // Navigate to the application URL

    //initialize page objects
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);

});

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000); //Wait for 3 seconds before closing the browser
    await page.close(); //Close the browser after all tests are completed
});

test('Login with valid credentials @master @sanity @regression', async () => {
    //Navigate to Login page via Home page
    await homePage.clickOnMyAccount(); // Click on 'My Account'
    await homePage.clickOnLogin(); // Click on 'Login'

    //Enter valid credentials and log in
    await loginPage.setEmail(config.email);
    await loginPage.setPassword(config.password);
    await loginPage.clickLogin();

    //Verify successful login by checking 'My Account' page presence
    const isLoggedIn = await myAccountPage.isMyAccountPageExists();
    expect(isLoggedIn).toBeTruthy(); 


});