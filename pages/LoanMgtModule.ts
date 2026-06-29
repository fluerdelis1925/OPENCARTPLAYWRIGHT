import{Page, Locator} from '@playwright/test'

export class LoanMgtModule
{
   private readonly page:Page;
   private readonly LoanMangement:Locator;
   private readonly LoanExeptionMgt:Locator;
   
   constructor(page:Page)
   {
     this.page = page;
     this.LoanMangement = page.locator("ul li:nth-child(8)");
     
   }





}