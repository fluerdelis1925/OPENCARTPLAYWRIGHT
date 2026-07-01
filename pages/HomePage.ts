import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
  //locators
  private readonly page: Page;
  private readonly lnkMyAccount: Locator;
  private readonly lnkRegister: Locator;
  private readonly linkLogin: Locator;
  private readonly txtSearchbox: Locator;
  private readonly btnSearch: Locator;
  //constructor

  constructor(page: Page) {
    this.page = page;
    this.lnkMyAccount = page.locator('span:has-text("My Account")');
    this.lnkRegister = page.locator('a:has-text("Register")');
    this.linkLogin = page.locator('a:has-text("Login")');
    this.txtSearchbox = page.locator('input[placeholder="Search"]');
    this.btnSearch = page.locator('#search button[type="button"]');
  }

  //actions methods
  //Check if the home page is loaded by verifying the title
  async isHomePageExist()
  {
     let title = await this.page.title();
     if(title)
     {
      return true;
     }
     else
     {
      return false;
     }
  }

  //Click on My Account link
  async clickOnMyAccount()
  {
    try
    {
      await this.lnkMyAccount.click();
    }
    catch (error)
    {
      console.error("Error occurred while clicking on My Account link:", error);
      throw error;
    }
  }

  //Click on Register link
    async clickRegister()
  {
    try
    {
      await this.lnkRegister.click();
    }
    catch (error)
    {
      console.error("Error occurred while clicking on Register link:", error);
      throw error;
    }
  }

    //ClickLogin link
  async clickOnLogin()
  {
    try
    {
      await this.linkLogin.click();
    }
    catch (error)
    {
      console.error("Error occurred while clicking on Login link:", error);
      throw error;
    }
  }

  //Enter product name in search box
  async enterProductName(pName: string)
  {
    try
    {
      await this.txtSearchbox.fill(pName);
    }
    catch (error)
    {
      console.error("Error occurred while entering product name:", error);
      throw error;
    }
  }

    async clickSearch()
  {
    try
    {
      await this.btnSearch.click();
    }
    catch (error)
    {
      console.error("Error occurred while clicking on Search button:", error);
      throw error;
    }
  }

}
