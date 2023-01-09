@Login
Feature: Login validation

Scenario: login and logout
Given I login to rtZen app with "<username>" and "<password>"
Then I logout from rtZen

Examples:
    | username | password |
    | kumar+test4@onecompiler.com  | Qwaszx@12345  | 


Scenario: login and verify something and logout
Given I login to rtZen app with user type "banking_user"
Then Dashboard should display
And I logout from rtZen  
Examples:
    | username | password |
    | kumar+test4@onecompiler.com  | Qwaszx@12345  |