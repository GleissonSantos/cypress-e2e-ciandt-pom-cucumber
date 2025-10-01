import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../pages/loginPage.js';
import signupPage from '../../pages/signupPage.js';
import dataGenerator from '../../fixtures/dataGenerator.js';
import homePage from '../../pages/homePage.js';



let testData = {};

// ===== GIVEN =====
Given('I am on the login page', () => {
  loginPage.acessLoginPage()
})


// ===== WHEN =====
When('I fill in the email {string}', () => {
  loginPage.fillEmail(testData.email)
})

When('I fill in the password {string}', () => {
  loginPage.fillPassword(testData.password)
})

When('I have a registered regular user', () => {
    testData = dataGenerator.generateValidUser();
    signupPage.signupRegularUserSuccess(testData.name, testData.email, testData.password);
    loginPage.acessLoginPage();
    loginPage.fillEmail(testData.email);
    loginPage.fillPassword(testData.password);
})

When('I have a registered admin user', () => {
    testData = dataGenerator.generateValidUser();
    signupPage.signupAdminUserSuccess(testData.name, testData.email, testData.password);
    loginPage.acessLoginPage();
    loginPage.fillEmail(testData.email);
    loginPage.fillPassword(testData.password);
})

When('I fill in the login form with invalid credentials', () => {
  testData = dataGenerator.generateInvalidLoginUser();
  loginPage.fillEmail(testData.email);
  loginPage.fillPassword(testData.password);
})

// ===== AND =====

When('I click the login button', () => {
  loginPage.submitLogin()
})

// ===== THEN =====
Then('I should be redirected to the regular home page', () => {
  cy.url().should('include', '/home')
  homePage.validadeRegularUserLogin()
  // ou cy.url().should('eq', Cypress.config().baseUrl + '/home')
})

Then('I should be redirected to the admin home page', () => {
  cy.url().should('include', '/admin')
  homePage.validadeAdminUserLogin()
})

Then('I should see an error message indicating invalid credentials', () => {
  loginPage.errorMessage()
})

