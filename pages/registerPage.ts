import{Page} from '@playwright/test'   

export default class RegisterPage{

    constructor(public page:Page){

    }

   async enterFirstName(firstname: string){
        await this.page.locator("#input-firstname").type(firstname);

    }
    async enterLastName(lastname: string){
        await this.page.locator("#input-lastname").type(lastname);

    }
    async enterEmail(emailid: string){
        await this.page.locator("#input-email").type(emailid);

    }
   
    async telephone(telephone: string){
        await this.page.locator("//input[@type='tel']").type(telephone);

      

    }

    async enterPassword(password: string){
        await this.page.locator("#input-password").type(password);

    }

    async confirmPassword(password: string){
        await this.page.locator("#input-confirm").type(password);

    }

      radioButtonForSubscription(){
        return this.page.locator("//label[normalize-space()='No']");

    }


    async agreeTermsAndCondition(){
        await this.page.click("//label[@for='input-agree']");

    }

    async clickOnSubmit(){
        await this.page.click("//input[@type='submit']");

    }

     contentOnSuccesfullCreation(){

        return this.page.locator("//h1[text()=' Your Account Has Been Created!']").textContent();
    }

}