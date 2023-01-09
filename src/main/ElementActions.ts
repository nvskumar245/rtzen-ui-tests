import * as globalProps from '../../src/test/resources/globalProperties.json'

class ElementActions {
    get EC_TIMEOUT() { return globalProps["timeouts"]["EC_TIMEOUT"] }

    async performClick(element: Promise<WebdriverIO.Element> | WebdriverIO.Element) {
        try{
            await (await element).waitForClickable({timeout: this.EC_TIMEOUT});
            await (await element).click();
            console.log("-- element click successful --")
        }catch (err) {
            throw new Error(err)
        }
    }

    async clearText(element: Promise<WebdriverIO.Element> | WebdriverIO.Element) {
        try{
            await (await element).waitForDisplayed({timeout: this.EC_TIMEOUT});
            await (await element).clearValue()
            console.log("-- element text cleared successfully --")
        }catch (err) {
            throw new Error(err)
        }
    }

    async enterText(element: Promise<WebdriverIO.Element> | WebdriverIO.Element, text: string) {
        try{
            await (await element).waitForDisplayed({timeout: this.EC_TIMEOUT});
            await (await element).setValue(text)
            console.log("-- element text entered successfully --")
        }catch (err) {
            throw new Error(err)
        }
    }

    async isElementDisplayed(element: Promise<WebdriverIO.Element> | WebdriverIO.Element) {
        return await (await element).isDisplayed()
    }

    async clearTextAndEnter(element: Promise<WebdriverIO.Element> | WebdriverIO.Element, text: string) {
        await this.clearText(element);
        await this.enterText(element,text);
    }

    async moveToElementAndClick(element: Promise<WebdriverIO.Element> | WebdriverIO.Element) {
        try{
            await this.performMoveTo(element);
            await this.performClick(element);
            console.log("-- Performed click actoin on element --");
        } catch( err ) {
            throw new Error(err);
        }
    }

    async getElementText( element: Promise<WebdriverIO.Element> | WebdriverIO.Element ) {
        let elementText:string;
        try{
            await (await element).waitForExist({timeout: this.EC_TIMEOUT});
            elementText = await (await element).getText();
            console.log("-- Retrived text from element -- "+elementText);
        }catch( err ) {
            throw new Error(err);
        }
        return elementText;
    }

    async getElementAttribute( element: Promise<WebdriverIO.Element> | WebdriverIO.Element, attribute: string):Promise<string> {
        let attributeValue:string;
        try{
            await (await element).waitForExist({timeout: this.EC_TIMEOUT});
            console.log("-- Attempting to get the attribute value of attribute -- "+attribute);
            attributeValue = await (await element).getAttribute(attribute);
            console.log("-- Retrived attribute value from element -- "+attributeValue);
        }catch( err ) {
            throw new Error(err);
        }
        return attributeValue;
    }

    async performMoveTo(element: Promise<WebdriverIO.Element> | WebdriverIO.Element) {
        try{
            await (await element).waitForClickable({ timeout: this.EC_TIMEOUT});
            await (await element).moveTo();
        }catch(error) {
            throw new Error(error);
        }
    }

    async isElementClickable(element: Promise<WebdriverIO.Element> | WebdriverIO.Element) {
        return await(await element).waitForClickable({timeout: this.EC_TIMEOUT})
    }

    async isElementEnabled(element: Promise<WebdriverIO.Element> | WebdriverIO.Element) {
        return await(await element).isEnabled()
    }

    async isElementExists(element: Promise<WebdriverIO.Element> | WebdriverIO.Element) {
        return await(await element).isExisting()
    }

    async scrollToElement(element: Promise<WebdriverIO.Element> | WebdriverIO.Element) {
        try{
            await( await element ).waitForExist({ timeout: this.EC_TIMEOUT});
            await (await element).scrollIntoView();
            console.log("-- Scrolled into the element --");
        }catch( err ) {
            throw new Error(err);
        }
    }

}

export default new ElementActions()