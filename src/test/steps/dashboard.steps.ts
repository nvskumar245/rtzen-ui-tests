import { Given, When, Then } from "@wdio/cucumber-framework";
import browserActions from '../../main/BrowserActions';
import elementActions from '../../main/ElementActions';
import commonUtils from '../../main/CommonUtils';
import dashboard from '../../test/pages/dashboard.page';
import waits from '../../main/Waits';
import chai from 'chai';
var expect = chai.expect;

Then(/^Dashboard should display$/, async function() {
   expect(await dashboard.isChartDisplayed()).to.be.true
})

When(/^I navigate to \"([^\"]*)\" page in \"([^\"]*)\" service$/, async function(pageName:string,serviceName:string) {
   await dashboard.selectModuleOption(serviceName);

   switch (pageName) {
      case "Transactions":
         await elementActions.performClick(await dashboard.transactionsLink);
         break;
      default:
         console.log("Invalid page name ...",pageName);
         break;
   }
})

Then(/^\"([^\"]*)\" file should get download$/, async function(fileNameOrExtension:string) {
   expect(await commonUtils.isFileDownloaded(fileNameOrExtension)).to.be.true
})