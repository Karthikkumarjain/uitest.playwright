# Test Automation with Playwright

This is a sample test framework using POM in Playwright. The tests and other classes are written in .ts.The tests would run in firefox and chrome browser simultaneously.




## Prerequisite

Since this is based on Playwright with TS, so the pre-requisite is to have NodeJS installed on our system. Once NodeJS is installed.

* Clone the repo
* Install the npm dependencies using npm i or npm install
* See the Run Tests section on how to run the tests
## Structure

The primary directories are as follows


* .github : Contains the .yaml files for Github Actions CI.
* base : Contains a fixture ts file to create objects of each page class that can be used while writing tests.
* testdata : Contains the different data providers.
* pages : Contains locator classes along with the functions to be performed.
* tests : Contain the tests for the web pages
## System Under Test

The system under test is : https://ecommerce-playground.lambdatest.io/index.php?
## Libraries Used

* Playwright : For driving the UI tests
## Config

* playwright.config.ts - Can be used to run tests in ci and local(Need to make couple of changes based on needs to run in local).
## Run Tests

To run the tests in local use

```bash
  npx playwright test or npm run test
```
or

```bash
  npm run test
```
## Reports

* Reports are hosted on the Github pages.
## New Project Setup and Helpers

Steps to create a fresh Project :

* Create a folder in your local.
* Open cmd --> type "code ." and press enter .
* Visual studio code application will open(If it is * installed on the system) 
* Add on: Plugin -->playwright(by micorsoft)-->download 
* CTRL+SHIFT+P--->COMMAND PANEL 
* install playright 
* select browsers and OK

To open recorder
* playwright recorder: npx playwright codegen

To run test with specific browser
* If we want to run specific browser: Change script in package.json to "npx playwright test --project=chrome"
