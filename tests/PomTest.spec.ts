import {test, expect} from '@playwright/test'
import {HomePage} from '../pages/HomePage'
import {CartPage} from '../pages/CartPage'
import {LoginPage} from '../pages/LoginPage'

test('user can login, add a product to the cart', async({page}) =>
{


  await page.goto("https://www.demoblaze.com/");
  const loginPage = new LoginPage(page);
  
  await loginPage.clickLoginLink();
  await loginPage.enterUserName("pavanol");
  await loginPage.enterPassword("test@123");
  await loginPage.clickOnLoginButton();

  //Homepage
  const homepage = new HomePage(page);
  await homepage.addProductToCart("Samsung galaxy s6");
  await homepage.gotoCart();

  //Cart Page
   const cartPage = new CartPage(page);
   await cartPage.checkProductInCart("Samsung galaxy s6")
   await page.waitForTimeout(3000);

})