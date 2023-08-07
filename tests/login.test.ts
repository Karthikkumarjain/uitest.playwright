import{chromium, test} from "@playwright/test"

test("Login test demo",async()=>{

    const browser = await chromium.launch({
        headless:false
    });
    const context =await browser.newContext();
    const page =await context.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']");
    await page.click("text=Login");    //await page.click("'Login'");
    await page.fill("//input[@id='input-email']","karthik9629846380@gmail.com"); // await page.locator().fill();
    await page.fill("//input[@id='input-password']","123456789");
    await page.click("//input[@value='Login']");

    //await page.waitForTimeout(5000);
})