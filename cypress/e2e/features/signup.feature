# language: en
Feature: Sign up a new user
    As a new user of the system
    I want to sign up for a new account
    To access the system functionalities

    Background:
        Given I am on the user signup page
    
    
    Scenario: Sign up a new regular user successfully
        When I fill in the signup form with valid data for a regular user
        And I click the signup button
        Then I should see a success message indicating the user was signed up successfully

    
    Scenario: Sign up a new admin user successfully
        When I fill in the signup form with valid data for a admin user
        And I click the signup button
        Then I should see a success message indicating the user was signed up successfully 

    @invalidEmail
    Scenario: Trying to sign up with a invalid email format
        When I fill in the signup form with an invalid email format
        And I click the signup button
        Then I should see an error message indicating the email format is invalid   