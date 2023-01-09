class BrowserActions {

    async openUrl(url:string) {
        await browser.url(url);
        this.waitForPageToLoad()
    }

    async waitForPageToLoad() {
        browser.waitUntil(async () => {
            const state = browser.execute(function () {
                return document.readyState;
            });
            return await state === 'complete'
        },
            {
                timeout: 60000 , //60sec
                timeoutMsg: 'Your network is slow'
        });
    }

    async getCurrentUrl() {
        return await browser.getUrl();
    }

    async refreshPage() {
        await browser.refresh();
    }

    async wait(waitTime:number) {
        await browser.pause(waitTime);
    }
}

export default new BrowserActions()