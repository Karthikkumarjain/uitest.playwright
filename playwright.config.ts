import { PlaywrightTestConfig} from '@playwright/test';

const config:PlaywrightTestConfig = {
testMatch:["tests/login.test.ts"],
use: {
    screenshot:'on',
    video: 'off',
    headless:false
},
retries:2,
reporter: [["dot"],["json",{
    outputFile: "jsonReports/jsponReport.json"
}],["html",{
    open:"never"
}]]

};
export default config;