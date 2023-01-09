import { Given, When, Then } from "@wdio/cucumber-framework";
import browserActions from '../../../main/BrowserActions';
import elementActions from '../../../main/ElementActions';
import transactions from '../../../test/pages/banking-service/transactions.page';
import waits from '../../../main/Waits';
import chai from 'chai';
var expect = chai.expect;

When(/^I click on export button$/, async function() {
    await transactions.downloadTransactions();
})

