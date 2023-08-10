import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testMatch: ["tests/registerandlogin.test.ts"],
    use: {
        baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
        headless: true,
        screenshot: 'on',
        video: 'off',
        launchOptions: {
         //   slowMo: 10000
        }
    },
   // retries: 2,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsponReport.json"
    }], ["html", {
        open: "never"
    }]]

};
export default config;