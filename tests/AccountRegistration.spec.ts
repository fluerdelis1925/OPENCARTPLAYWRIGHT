    /**
     * Test Case: Account Registration
     *
     * Tags: @master @sanity @regression
     *
     * Steps:
     * 1) Navigate to application URL
     * 2) Go to 'My Account' and click 'Register'
     * 3) Fill in registration details with random data
     * 4) Agree to Privacy Policy and submit the form
     * 5) Validate the confirmation message
     */

    import { test, expect } from '@playwright/test';
    import {HomePage} from '../pages/HomePage';
    import {RegistrationPage} from '../pages/RegistrationPage';
    import  {RandomDataUtil} from '../utils/randomDataGenerator';
    import {TestConfig} from '../test.config';

    let homePage: HomePage;
    let registrationPage: RegistrationPage;
    let config: TestConfig;
       

    test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl); //Navigate to application URL
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);
    await homePage.isHomePageExist(); //Validate that the home page is loaded
    
    });

    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(3000); //Wait for 3 seconds before closing the browser
        await page.close(); //Close the browser after all tests are completed
    });


    test('User  registration test', async () =>
    {

    await homePage.clickOnMyAccount(); //Click on 'My Account'
    await homePage.clickRegister(); //Click on 'Register'

   //fill in registration details with random data

    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getlastName());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());

    const password = RandomDataUtil.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);

    await registrationPage.setPrivacyPolicy(); //Agree to Privacy Policy
    await registrationPage.clickContinue(); //Submit the form

    //Validate the confirmation message
    const confirmationMsg = await registrationPage.getConfirmationMsg();
    await expect(confirmationMsg).toContain('Your Account Has Been Created!'); //Validate confirmation message

    


})



