import { expect, test } from '@playwright/test'
import RegisterPage from '../pages/registerPage'
import LoginPage from '../pages/loginPage'
import ShopByCategory from '../pages/shopByCategory'


test.describe("Registration and Login Test", async () => {

    test("Register new user on the page", async ({ page, baseURL }) => {

        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("Karthik");
        await register.enterLastName("Kumar");
        await register.telephone("1234567891");
        await register.enterEmail("aaasdpdaa@gmail.com");
        await register.enterPassword("1234567");
        await register.confirmPassword("1234567");
        await register.radioButtonForSubscription().click();
        expect(register.radioButtonForSubscription()).toBeChecked();

        await register.agreeTermsAndCondition();
        await register.clickOnSubmit();
        expect(await register.contentOnSuccesfullCreation()).toContain("Your Account Has Been Created!");

    })

    test("Login to the application", async ({ page, baseURL }) => {

        const loginPage = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`)
        await loginPage.enterEmailIdForLogin("asdada@gmail.com");
        await loginPage.enterPasswordForLogin("1234567");

        await loginPage.clickOnLoginButton();
        expect(await loginPage.getTitleOfPage()).toEqual("My Account");

    })

    test.only("Add an item to the cart", async ({ baseURL, page }) => {

        const loginPage = new LoginPage(page);
        const shopByCategory = new ShopByCategory(page);
        await page.goto(`${baseURL}route=account/login`)
        await loginPage.loginUserTotheApplication("asdada@gmail.com", "1234567");
        await shopByCategory.clickOnSelectByCategory();
        await shopByCategory.clickOnCameraCategory();
        let actualTitleOfPage =await page.title();
        expect(actualTitleOfPage).toEqual("Cameras");

    })


})