import { Given, When, Then } from "@wdio/cucumber-framework";
import browserActions from '../../../src/main/BrowserActions';
import elementActions from '../../../src/main/ElementActions';
import loginPage from '../pages/login.page';
import waits from '../../../src/main/Waits';
import chai from 'chai';
var expect = chai.expect;

Given(/^I login to rtZen app with \"([^\"]*)\" and \"([^\"]*)\"$/, async function(username:string, password:string) {
    await browserActions.openUrl('/');
    await loginPage.enterCredentials(username, password);
    //await loginPage.enterSecureCode(secureCode);
});

Given(/^I login to rtZen app with user type \"([^\"]*)\"$/, async function(userType:string) {
    await browserActions.openUrl('/');
    await loginPage.performLogin(userType);

})

Then(/^I logout from rtZen$/, async function () {
    await loginPage.doLogout();
    await waits.waitForVisibility(await loginPage.usernameInput)
    expect(await elementActions.isElementDisplayed(await loginPage.usernameInput)).to.be.true;
})