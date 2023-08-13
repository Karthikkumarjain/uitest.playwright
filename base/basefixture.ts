import { test as baseTest } from "@playwright/test"
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"
import ShopByCategory from "../pages/shopByCategory"



type pages = {

    register: RegisterPage;
    loginPage: LoginPage;
    shopByCategory: ShopByCategory;
}

const testPages = baseTest.extend<pages>({

    register: async ({ page }, use) => {
        await use(new RegisterPage(page));

    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));

    },
    shopByCategory: async ({ page }, use) => {
        await use(new ShopByCategory(page));

    }

})

export const test = testPages;
export const expect =testPages.expect;