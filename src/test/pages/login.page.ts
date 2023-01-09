import elementActions from '../../../src/main/ElementActions';
import waits from '../../../src/main/Waits';
import * as envJSON from '../resources/globalProperties.json';
import * as inputData from '../resources/inputData.json';
let env = process.env.ENV;
const LOGIN_PAGE_TIMEOUT = envJSON["timeouts"]["SLEEP_TIMEOUT_5000"]

class LoginPage {

    get usernameInput() { return $("#email") }
    get passwordInput() { return $("[name='password']") }
    get signInBtn() { return $(".signin-btn") }
    async otpInputs() { return $$("//div[@class='input-otp']/input") }
    get avatharIcon() { return $(".bottom button div div div div") }
    get signoutBtn() { return $("//button[text()='Sign out']") }

    async enterCredentials(username: string, password: string) {
        await elementActions.clearText(await this.usernameInput)
        await elementActions.enterText(await this.usernameInput,username)
        await elementActions.clearText(await this.passwordInput)
        await elementActions.enterText(await this.passwordInput,password)
        await elementActions.performClick(await this.signInBtn)
        await browser.pause(7000);
    }

    async enterSecureCode(secureCode:string) {
        await waits.waitForVisibility((await this.otpInputs())[0]);
        for(let i=0;i<(await this.otpInputs()).length;i++) {
            await elementActions.enterText(this.otpInputs()[i],secureCode.charAt[i])
        }
    }

    async doLogout() {
        await waits.waitForVisibility(await this.avatharIcon)
        await elementActions.performClick(await this.avatharIcon)
        await waits.waitForElementToBeClickable(await this.signoutBtn)
        await elementActions.performClick(await this.signoutBtn);
        console.log("----- logout successful -----")
    }

    async doLogin(username:string, password:string) {
        await this.enterCredentials(username,password);
        //await this.enterSecureCode("999999")
    }

    async performLogin(userType:string) {
        console.log("usertype : "+userType)
        let isLogout:boolean = await elementActions.isElementDisplayed(await this.avatharIcon);
        console.log("isLogout : "+isLogout)
        if(isLogout) {
            console.log("--- Logout was not successful, attempting to logout ---");
            await this.doLogout();
            console.log("--- Login page rendering ---")
            await browser.pause(LOGIN_PAGE_TIMEOUT);
        } else {
            console.log("--- Login page rendering ---")
        }
        //this has to removed when we use linux based machine ad has to set ENV variable before running tests
        env = "dev";
        console.log("env ---- "+env)
        var username = inputData[env + "_cred"]["username"][userType];
        var password = inputData[env + "_cred"]["password"][userType];
        console.log("username : "+username)
        console.log("password : "+password)
        await this.doLogin(username,password);

    }
}

export default new LoginPage()