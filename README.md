**Steps to create a fresh Project :
**
1.Create a folder in local
2.cmd --> type code .
3.visual code will open
4.plugin -->playwright by micorsoft-->download
5.CTRL+SHIFT+P--->COMMAND PANEL
6.install playright
7.select browsers and OK


ctrl+J -->Bring terminal

npx playwright test


ctrl+L-->Clear terminal

playwright recorder:
npx playwright codegen


Steps to git ignore if already updated

Sample : $ git rm --cached jsonReports/

If we want to run specific browser: Change script in package.json to "npx playwright test --project=chrome"