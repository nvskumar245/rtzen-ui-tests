@Transactions
Feature: Transactions page validation

Scenario: Verify transactions file downloaded or not 
Given I login to rtZen app with "<username>" and "<password>"
When I navigate to "Transactions" page in "Banking" service
And I click on export button
Then "Bank_Transactions.xlsx" file should get download
And I logout from rtZen

Examples:
    | username | password |
    | kumar+test4@onecompiler.com  | Qwaszx@12345  | 