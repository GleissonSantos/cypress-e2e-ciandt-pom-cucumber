import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import signupPage from '../../pages/signupPage.js';
import dataGenerator from '../../fixtures/dataGenerator.js';


// Variable to store test data across steps
let testData = {};

// ===== GIVEN =====
Given('I am on the user signup page', () => {
    signupPage.acessUserSignupPage()
})


// ===== WHEN - AND  =====
When('I fill in the name {string}', (name) => {
    signupPage.fillName(name);
})

When('I fill in the email {string}', (email) => {
    signupPage.fillEmail(email);
})

When('I fill in the password {string}', (password) => {
    signupPage.fillPassword(password);
})

When('I check the admin checkbox', () => {
    signupPage.checkAdmin();
})

When('I click the signup button', () => {
    signupPage.clickSubmitSignupForm();
})

When('I fill in the signup form with an invalid email format', () => {
    testData = dataGenerator.generateInvalidEmailUser();
    signupPage.fillName(testData.name);
    signupPage.fillEmail(testData.email);
    signupPage.fillPassword(testData.password);
})

// ===== THEN =====
Then('I should see a success message indicating the user was signed up successfully', () => {
    signupPage.validateSuccessSignupMessage();
})

Then('I should see an error message indicating the email format is invalid', () => {
    signupPage.errorMessageInvalidEmail();
})




// ===== COMPOSE STEPS =====

When('I fill in the signup form with valid data for a regular user', () => {
    
    testData = dataGenerator.generateValidUser();
    signupPage.signupRegularUserSuccess(testData.name, testData.email, testData.password);
})

When('I fill in the signup form with valid data for a admin user', () => {
    
    testData = dataGenerator.generateValidUser();
    signupPage.signupAdminUserSuccess(testData.name, testData.email, testData.password);
    
})

Given('I signed up a admin user successfully', () => {
    testData = dataGenerator.generateValidUser();
    signupPage.signupAdminUserSuccess(testData.name, testData.email, testData.password);
});


Given('I signed up a regular user successfully', () => {
    testData = dataGenerator.generateValidUser();
    signupPage.signupRegularUserSuccess(testData.name, testData.email, testData.password);
});