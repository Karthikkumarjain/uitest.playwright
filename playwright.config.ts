import { PlaywrightTestConfig, devices, firefox } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testMatch: ["tests/registerandlogin_withfixtures.test.test.ts"],

    projects: [
        {
            name: "Chrome",
            use: {
                ...devices["Desktop Chrome"]
            }
        },
        {
            name: "Firefox",
            use: {
                ...devices["Desktop Firefox"]
            }

        }

    ],
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