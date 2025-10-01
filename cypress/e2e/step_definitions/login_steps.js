import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../pages/loginPage.js';
import registerPage from '../../pages/registerPage.js';
import dataGenerator from '../../fixtures/dataGenerator.js';
import homePage from '../../pages/homePage.js';


// Variable to store test data across steps
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
    registerPage.registerRegularUserSuccess(testData.name, testData.email, testData.password);
    loginPage.acessLoginPage();
    loginPage.fillEmail(testData.email);
    loginPage.fillPassword(testData.password);
});

When('I have a registered admin user', () => {
    testData = dataGenerator.generateValidUser();
    registerPage.registerAdminUserSuccess(testData.name, testData.email, testData.password);
    loginPage.acessLoginPage();
    loginPage.fillEmail(testData.email);
    loginPage.fillPassword(testData.password);
});

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


// ===== COMPOSE STEPS =====
When('Im already logged in the application as a regular user', (email, password) => {
    testData = dataGenerator.generateValidUser(email, password);
    loginPage.regularUserLogin(email, password)
    homePage.validadeRegularUserLogin()
})

When('Im already logged in the application as a admin user', (email, password) => {
    testData = dataGenerator.generateValidUser(email, password);
    loginPage.adminUserLogin(email, password)
    homePage.validadeAdminUserLogin()
})

// ===== VALIDATIONS =====
Then('o campo email deve estar destacado em vermelho', () => {
  cy.get('[data-testid="email"]').should('have.class', 'is-invalid')
})

Then('o campo senha deve estar destacado em vermelho', () => {
  cy.get('[data-testid="senha"]').should('have.class', 'is-invalid')
})
