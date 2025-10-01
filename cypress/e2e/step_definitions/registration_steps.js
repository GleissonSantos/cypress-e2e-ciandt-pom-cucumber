import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../pages/homePage.js';
import dataGenerator from '../../fixtures/dataGenerator.js';
import loginPage from '../../pages/loginPage.js';
import signupPage from '../../pages/signupPage.js'; 
import registerProductPage from '../../pages/registerProductPage.js';


let testData = {};

//===== GIVEN =====
Given('I am on the registration page', () => {
    homePage.visit("/cadastrarprodutos");
});

//===== WHEN =====
When('I acess the registration page', () => {
    registerProductPage.acessRegisterProductPage();
});

When('I fill in the product name with {string}', (name) => {
    testData.name = name; // Store the name in testData
    registerProductPage.fillProductName(name);
});

When('I fill in the product price with {string}', (price) => {
    testData.price = price; // Store the price in testData
    registerProductPage.fillProductPrice(price);
});

When('I fill in the product description with {string}', (description) => {
    testData.description = description; // Store the description in testData
    registerProductPage.fillProductDescription(description);
});

When('I fill in the product quantity with {string}', (quantity) => {
    testData.quantity = quantity; // Store the quantity in testData
    registerProductPage.fillProductQuantity(quantity);
});

When('I submit the registration form', () => {
    registerProductPage.registerProductButton();
});

When("I fill in the product details with valid data", () => {
    testData = dataGenerator.generateValidProduct();
    registerProductPage.fillProductName(testData.name);
    registerProductPage.fillProductPrice(testData.price);
    registerProductPage.fillProductDescription(testData.description);
    registerProductPage.fillProductQuantity(testData.quantity);
});

When('I register a product successfully', () => {
    testData = dataGenerator.generateValidProduct();
    registerProductPage.registerProductSuccessfully(testData.name, testData.price, testData.description, testData.quantity);
});

When('Im on the registration page as an admin user', () => {
    testData = dataGenerator.generateValidUser();
    signupPage.signupAdminUserSuccess(testData.name, testData.email, testData.password);
    loginPage.acessLoginPage();
    loginPage.fillEmail(testData.email);
    loginPage.fillPassword(testData.password);
    loginPage.submitLogin();
    homePage.acessRegisterProductAsAdmin();
   
}); 



//===== THEN =====
Then('the product should be registered successfully', () => {
    cy.contains(testData.name).should('be.visible');
    cy.contains(testData.price).should('be.visible');
    cy.contains(testData.description).should('be.visible');
    cy.contains(testData.quantity).should('be.visible');
});

Then('The new product should be listed on the products page', () => {
    cy.contains(testData.name).should('be.visible');
    cy.contains(testData.price).should('be.visible');
    cy.contains(testData.description).should('be.visible');
    cy.contains(testData.quantity).should('be.visible');
});