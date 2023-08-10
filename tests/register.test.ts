import { expect, test } from '@playwright/test'
import RegisterPage from '../pages/registerPage'

test("Resgister new user on the page", async ({ page, baseURL }) => {

    const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("Karthik");
    await register.enterLastName("Kumar");
    await register.telephone("1234567891");
    await register.enterEmail("asdad@gmail.com");
    await register.enterPassword("1234567");
    await  register.confirmPassword("1234567");
    await register.radioButtonForSubscription();


register.agreeTermsAndCondition();
register.clickOnSubmit();

})