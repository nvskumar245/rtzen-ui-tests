import elemActions from '../../main/ElementActions';
import waits from '../../main/Waits';

class Dashboard {
    get charts() { return $$(".aggregate-chart-data") }
    get transactionsLink() { return $(".menu-transactions") }
    get cashFlowLink() { return $(".menu-cashflow") }
    get menuLink() { return $(".menu") }

    /**
     * this is for module options menu Payments ,Banking, Treasury, Reports
     * @param moduleName 
     * @returns module webelement
     */
    async menuOption(moduleName:string) { return $("//div[text()='"+moduleName+"']") }


    async isChartDisplayed() {
        await waits.waitForVisibility(await this.charts[0])
       return await elemActions.isElementDisplayed(await this.charts[0]);
    }

    /**
     * this is for module options menu Payments ,Banking, Treasury, Reports
     * @param moduleName 
     * @returns module webelement
     */
    async selectModuleOption(moduleName:string) {
        await elemActions.performClick(await this.menuLink);
        await elemActions.performClick(await this.menuOption(moduleName));
    }

}

export default new Dashboard()