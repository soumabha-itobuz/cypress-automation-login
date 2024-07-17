Feature:
  Scenario: Valid login 
    Given I visit login page
    When I used valid credentials
    Then I can see the dashboard