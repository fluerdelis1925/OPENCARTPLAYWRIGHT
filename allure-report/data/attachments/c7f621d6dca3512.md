# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login with valid credentials @master @sanity @regression
- Location: tests\login.spec.ts:41:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
Call log:
  - navigating to "http://localhost/opencart/upload/", waiting until "load"

```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Login with Valid Credentials
  3  |  *
  4  |  * Tags: @master @sanity @regression
  5  |  *
  6  |  * Steps:
  7  |  * 1) Navigate to the application URL
  8  |  * 2) Navigate to Login page via Home page
  9  |  * 3) Enter valid credentials and log in
  10 |  * 4) Verify successful login by checking 'My Account' page presence
  11 |  */
  12 | 
  13 | import { test, expect } from '@playwright/test';
  14 | import { HomePage } from '../pages/HomePage';
  15 | import { LoginPage } from '../pages/LoginPage';
  16 | import { MyAccountPage } from '../pages/MyAccountPage';
  17 | import { TestConfig } from '../test.config';
  18 | 
  19 | let homePage: HomePage;
  20 | let loginPage: LoginPage;
  21 | let myAccountPage: MyAccountPage;
  22 | let config: TestConfig;
  23 | let MyAccountPPage:MyAccountPage;
  24 | //hooks before run each test cases
  25 | test.beforeEach(async ({ page }) => {
  26 |     config = new TestConfig();
> 27 |     await page.goto(config.appUrl); // Navigate to the application URL
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
  28 | 
  29 |     //initialize page objects
  30 |     homePage = new HomePage(page);
  31 |     loginPage = new LoginPage(page);
  32 |     myAccountPage = new MyAccountPage(page);
  33 | 
  34 | });
  35 | 
  36 | test.afterEach(async ({ page }) => {
  37 |     await page.waitForTimeout(3000); //Wait for 3 seconds before closing the browser
  38 |     await page.close(); //Close the browser after all tests are completed
  39 | });
  40 | 
  41 | test('Login with valid credentials @master @sanity @regression', async () => {
  42 |     //Navigate to Login page via Home page
  43 |     await homePage.clickOnMyAccount(); // Click on 'My Account'
  44 |     await homePage.clickOnLogin(); // Click on 'Login'
  45 | 
  46 |     //Enter valid credentials and log in
  47 |     await loginPage.setEmail(config.email);
  48 |     await loginPage.setPassword(config.password);
  49 |     await loginPage.clickLogin();
  50 | 
  51 |     //Verify successful login by checking 'My Account' page presence
  52 |     const isLoggedIn = await myAccountPage.isMyAccountPageExists();
  53 |     expect(isLoggedIn).toBeTruthy(); 
  54 | 
  55 | 
  56 | });
```