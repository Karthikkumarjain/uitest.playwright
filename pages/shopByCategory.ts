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


    async addItemToCart() {

        await Promise.all([
            this.page.waitForLoadState("load", {
                // timeout:3000
            }),
            await this.page.hover("//div[@class='carousel-item active']//img[@title='HTC Touch HD']", {
                strict: false
            }),


        ]


        )
             await this.page.locator("//button[@title='Add to Cart']").nth(0).click(),
            await this.page.click("//a[normalize-space()='View Cart']")

    }

}