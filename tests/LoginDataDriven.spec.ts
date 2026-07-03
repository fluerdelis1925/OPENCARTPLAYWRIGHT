import{test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { TestConfig } from '../test.config';
import { DataProvider } from '../utils/DataProvider';

//Load Json test data logindata.json

const jsonPath = "testdata/logindata.json";
const jsonTestData =DataProvider.getDataFromJson(jsonPath);

for(const data of jsonTestData)
{
   test(`Login Test with JSON Data: ${data.testName} @datadriven`, async ({ page }) => {

      const config = new TestConfig();
      await page.goto(config.appUrl); //Navigate to application URL

      const homePage = new HomePage(page);
      await homePage.clickOnMyAccount(); //Click on 'Login'
      await homePage.clickOnLogin(); //Click on 'Login'

      const loginPage = new LoginPage(page);
      await loginPage.login(data.email, data.password); //Perform login with test data

      if (data.expected.toLowerCase() === 'success') {
         const myAccountPage = new MyAccountPage(page);
         const isLoggedIn = await myAccountPage.isMyAccountPageExists();
         await expect(isLoggedIn).toBeTruthy(); //Validate that the user is logged in successfully
      }
      else
      {
         const errorMessage = await loginPage.getloginErrorMessage(); //Get the error message displayed on the login page
         await expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.'); //Validate that the expected error message is displayed
      }
    
   })

}

//Loan CSV test data logindata.


const cPath = "testdata/logindata.csv";
const csvTestData = DataProvider.getDataFromCsv(cPath);

for(const data of csvTestData)
{
   test(`Login Test with CSV Data: ${data.testName} @datadriven`, async ({ page }) => {

      const config = new TestConfig();
      await page.goto(config.appUrl); //Navigate to application URL

      const homePage = new HomePage(page);
      await homePage.clickOnMyAccount(); //Click on 'Login'
      await homePage.clickOnLogin(); //Click on 'Login'

      const loginPage = new LoginPage(page);
      await loginPage.login(data.email, data.password); //Perform login with test data

      if (data.expected.toLowerCase() === 'success') {
         const myAccountPage = new MyAccountPage(page);
         const isLoggedIn = await myAccountPage.isMyAccountPageExists();
         await expect(isLoggedIn).toBeTruthy(); //Validate that the user is logged in successfully
      }
      else
      {
         const errorMessage = await loginPage.getloginErrorMessage(); //Get the error message displayed on the login page
         await expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.'); //Validate that the expected error message is displayed
      }
    
   })

}
