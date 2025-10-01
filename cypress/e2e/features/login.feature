# language: en
Feature: User Login
    As a user of the system
    I want to log in to the application
    To access the system functionalities

    Background:
        Given I am on the login page

    @login
    Scenario: Login as a regular user with valid credentials
        And I have a registered regular user
        When I click the login button
        Then I should be redirected to the regular home page

    @login
    Scenario: Login as a admin user with valid credentials
        And I have a registered admin user
        When I click the login button
        Then I should be redirected to the admin home page

    Scenario: Login with invalid credentials
        When I fill in the login form with invalid credentials
        And I click the login button
        Then I should see an error message indicating invalid credentials

