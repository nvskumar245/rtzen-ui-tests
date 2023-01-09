import * as globalProps from '../../src/test/resources/globalProperties.json'
import report from '@wdio/allure-reporter'

class Waits {
    get EC_TIMEOUT() { return globalProps["timeouts"]["EC_TIMEOUT"] }

    async waitForVisibility(element: WebdriverIO.Element) {
        try{
            await (await element).waitForDisplayed({ timeout: this.EC_TIMEOUT, reverse: false })
            report.addStep("----- waited for element to be visible -----")
        }catch( err ) {
            throw new Error(err)
        }
    }

    async waitForInvisibility(element: WebdriverIO.Element) {
        try{
            await (await element).waitForDisplayed({ timeout: this.EC_TIMEOUT, reverse: true })
            report.addStep("----- waited for element to be invisible -----")
        }catch( err ) {
            throw new Error(err)
        }
    }

    async waitForElementToBeClickable(element: WebdriverIO.Element) {
        try{
            await (await element).waitForClickable({ timeout: this.EC_TIMEOUT, reverse: false })
            report.addStep("----- waited for element to be clickable -----")
        }catch( err ) {
            throw new Error(err)
        }
    }

    async waitForPageLoad() {
        browser.waitUntil(
            () => browser.execute( () => document.readyState === 'complete'),
            {
                timeout: 60 * 1000, //60 sec
                timeoutMsg: '== Timed out at Page Load =='
            }
        );
    }
}

export default new Waits()