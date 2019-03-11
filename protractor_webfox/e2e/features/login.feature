Feature: Login for register users
  As a user of webfox
  I should be able to login
  to check personal data

  @loginPage
  Scenario: Webfox login process
    When I go to webfox site
    And I can see the login page
    And I login as user 'aqawefox+techtest@wefoxgroup.co' and password 'qwertyasdf'
    And I can see the new view as a registered user
    And I go to my contracts section
    And I see no contracts available
