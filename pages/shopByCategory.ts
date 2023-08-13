import { Page } from '@playwright/test'

export default class ShopByCategory {


    constructor(public page: Page) {

    }

    async clickOnSelectByCategory() {
        await this.page.click("//a[normalize-space() = 'Shop by Category']");

    }

    async clickOnCameraCategory() {
       await this.page.locator("(//a[@class='icon-left both nav-link'])").nth(1).click();

    }

}