import {By} from "selenium-webdriver";
import webdriver from "selenium-webdriver";
import config from "config";
import BasePage from "../base-page.js";

let loginButtonSelector = By.id('login-button');
let usernameTextboxSelector = By.id('text');
let passwordTextboxSelector = By.id('password');

export default class LoginPage extends BasePage {
    constructor(driver, visit = false) {
        super(driver, loginButtonSelector, visit, config.get('url'));
    }

    enterUsername(usernameText) {
        this.driver.findElement(usernameTextboxSelector).sendKeys(usernameText);
    }

    enterPassword(passwordText) {
        this.driver.findElement(passwordTextboxSelector).sendKeys(passwordText);
    }

    clickLogin() {
        this.driver.findElement(loginButtonSelector).click();
    }

    getAlertTextAndAccept() {
        this.driver.wait(webdriver.until.alertIsPresent());
        let alert = this.driver.switchTo().alert();
        let alertText = alert.getText();
        alert.accept();

        return alertText;
    }
}