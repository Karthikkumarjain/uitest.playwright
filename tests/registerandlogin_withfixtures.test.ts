import { expect,test } from '../base/basefixture'
import * as data from '../testdata/registrationdetails.json'


test.describe("Registration, Login and Add an item to cart", async () => {

    
    test("Register new user on the page", async ({ page, baseURL,register}) => {

       
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName(data.firstname);
        await register.enterLastName(data.lastname);
        await register.telephone(data.phonenumber);
        await register.enterEmail(data.emailId);
        await register.enterPassword(data.password);
        await register.confirmPassword(data.password);
        await register.radioButtonForSubscription().click();
        expect(register.radioButtonForSubscription()).toBeChecked();

        await register.agreeTermsAndCondition();
        await register.clickOnSubmit();
        expect(await register.contentOnSuccesfullCreation()).toContain("Your Account Has Been Created!");

    })

    test("Login to the application", async ({ page, baseURL,loginPage }) => {

        await page.goto(`${baseURL}route=account/login`)
        await loginPage.enterEmailIdForLogin(data.emailId);
        await loginPage.enterPasswordForLogin(data.password);

        await loginPage.clickOnLoginButton();
        expect(await loginPage.getTitleOfPage()).toEqual("My Account");

    })

    test.only("Add an item to the cart", async ({ baseURL, page,loginPage,shopByCategory }) => {

       
        await page.goto(`${baseURL}route=account/login`)
        await loginPage.loginUserTotheApplication(data.emailId, data.password);
        await shopByCategory.clickOnSelectByCategory();
        await shopByCategory.clickOnCameraCategory();
        let actualTitleOfPage = await page.title();
        expect(actualTitleOfPage).toEqual("Cameras");
        await shopByCategory.addItemToCart();

        let itemAdded = await page.locator("(//a[contains(text(),'HTC Touch HD')])[2]").textContent();

        expect(itemAdded).toEqual("HTC Touch HD");

    })


})