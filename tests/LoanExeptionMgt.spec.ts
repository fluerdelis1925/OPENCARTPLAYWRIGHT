import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginIcms'


test('Loan Exection Mgt', async({page})=>
{

  await page.goto("https://sso-integrator-sbf-uat5.ocft.com.sg/login-page?systems=icms");
  const loginPages = new LoginPage(page);
  await loginPages.loginICMS("dinsular@vertere-gs.com","dinsular@vertere-gs.com");


})