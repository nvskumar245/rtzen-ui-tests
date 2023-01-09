import elemActions from '../../../main/ElementActions'
import waits from '../../../main/Waits'
import browserActions from '../../../main/BrowserActions'

class Transactions {
    get transactionsTableDateHeader() { return $(".column-date[role='columnheader']") }
    get searchInput() { return $(".p-inputtext") }
    get importBtn() { return $("//button[span[text()='Import']]") }
    get exportBtn() { return $("//button[span[text()='Export']]") }
    get transactionsTablePaginator() { return $(".rtzen-paginator") }

    async waitForTransactionsTableToLoad() {
        await waits.waitForVisibility(await this.transactionsTablePaginator)
    }

    async downloadTransactions() {
        await this.waitForTransactionsTableToLoad();
        await elemActions.performClick(await this.exportBtn);
        await browserActions.wait(5000)
    }

}

export default new Transactions()