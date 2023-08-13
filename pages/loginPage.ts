import { Page } from '@playwright/test'

export default class LoginPage {


    constructor(public page: Page) {


    }

    async loginUserTotheApplication(emailId:string,password:string){
        await this.page.locator("#input-email").fill(emailId);
        await this.page.locator("#input-password").fill(password);
        await this.page.locator("//input[@value='Login']").click();
    }

    async enterEmailIdForLogin(emailId: string) {
        await this.page.locator("#input-email").fill(emailId);


    }

    async enterPasswordForLogin(password: string) {
        await this.page.locator("#input-password").fill(password);


    }

    async clickOnLoginButton(){

        await this.page.locator("//input[@value='Login']").click();
    }

    getTitleOfPage(){

        return this.page.title();
    }

}