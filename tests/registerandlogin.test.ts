import { expect, test } from '@playwright/test'
import RegisterPage from '../pages/registerPage'
import LoginPage from '../pages/loginPage'

test("Register new user on the page", async ({ page, baseURL }) => {

    const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("Karthik");
    await register.enterLastName("Kumar");
    await register.telephone("1234567891");
    await register.enterEmail("asdad@gmail.com");
    await register.enterPassword("1234567");
    await  register.confirmPassword("1234567");
    await register.radioButtonForSubscription();


await register.agreeTermsAndCondition();
await register.clickOnSubmit();

})

test.only("Login to the application", async({page,baseURL})=>{

    const loginPage = new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`)
    await loginPage.enterEmailIdForLogin("asdad@gmail.com");
    await loginPage.enterPasswordForLogin("1234567");
    
    await loginPage.clickOnLoginButton();

})