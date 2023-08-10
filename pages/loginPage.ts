import { Page } from '@playwright/test'

export default class LoginPage {
    constructor(public page: Page) {


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

}