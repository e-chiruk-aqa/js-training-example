import assert from "assert";
import test from "selenium-webdriver/testing";
import config from "config";
import LoginPage from "../page/webuniversity/login-page.js";
import * as BrowserFactory from "../utils/browsers.js";

let driver = null;
let page = null;

const mochaTimeoutMS = config.get('mochaTimeoutMS');

test.describe('Login page - fail scenario', function () {
    this.timeout(mochaTimeoutMS);

    test.before(function () {
        driver = BrowserFactory.initializeTestSetUp();
        page = new LoginPage(driver, true);
    });

    test.it('Enter username', function () {
        page.enterUsername("Admin");
    });

    test.it('Enter password', function () {
        page.enterPassword("Admin");
    });

    test.it('Click login', function () {
        page.clickLogin();
    });

    test.it("Check alert message and accept", function() {
        page.getAlertTextAndAccept().then(function (text) {
            assert.equal(text, 'validation failed');
        });
    });

    test.it("", function(){
        let a = 0;
    });

    test.after(() => driver.quit());
});