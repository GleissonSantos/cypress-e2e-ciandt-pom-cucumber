import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import registerPage from '../../pages/registerPage.js';
import dataGenerator from '../../fixtures/dataGenerator.js';


// Variable to store test data across steps
let testData = {};

// ===== GIVEN =====
Given('I am on the user registration page', () => {
    registerPage.acessUserRegisterPage()
})


// ===== WHEN - AND  =====
When('I fill in the name {string}', (name) => {
    registerPage.fillName(name);
})

When('I fill in the email {string}', (email) => {
    registerPage.fillEmail(email);
})

When('I fill in the password {string}', (password) => {
    registerPage.fillPassword(password);
})

When('I check the admin checkbox', () => {
    registerPage.checkAdmin();
})

When('I click the register button', () => {
    registerPage.submitRegister();
})

// ===== THEN =====
Then('I should see a success message indicating the user was registered successfully', () => {
    cy.get('.alert-link').should('have.text', 'Cadastro realizado com sucesso')
})


// ===== COMPOSE STEPS =====

When('I fill in the registration form with valid data for a regular user', () => {
    
    testData = dataGenerator.generateValidUser();
    registerPage.registerRegularUserSuccess(testData.name, testData.email, testData.password);
})

When('I fill in the registration form with valid data for a admin user', () => {
    
    testData = dataGenerator.generateValidUser();
    registerPage.registerAdminUserSuccess(testData.name, testData.email, testData.password);
    
})

Given('I registered a admin user successfully', () => {
    testData = dataGenerator.generateUserData();
    registerPage.registerAdminUserSuccess(testData.name, testData.email, testData.password);
});


Given('I registered a regular user successfully', () => {
    testData = dataGenerator.generateUserData();
    registerPage.registerRegularUserSuccess(testData.name, testData.email, testData.password);
});