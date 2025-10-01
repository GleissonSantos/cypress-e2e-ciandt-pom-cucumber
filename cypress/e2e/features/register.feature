# language: en
Feature: Register a new user
    As a new user of the system
    I want to register a new account
    To access the system functionalities

    Background:
        Given I am on the user registration page
    Scenario: Register a new regular user successfully
        When I fill in the registration form with valid data for a regular user
        And I click the register button
        Then I should see a success message indicating the user was registered successfully

    Scenario: Register a new admin user successfully
        When I fill in the registration form with valid data for a admin user
        And I click the register button
        Then I should see a success message indicating the user was registered successfully 