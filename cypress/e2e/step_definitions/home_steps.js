import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../pages/homePage.js';
import registerProductPage from '../../pages/registerProductPage.js';
import signupPage from '../../pages/signupPage.js';
import loginPage from '../../pages/loginPage.js';
import dataGenerator from '../../fixtures/dataGenerator.js';   


// Variable to store test data across steps
let testData = {};



//===== GIVEN =====

Given ('I am on the registration page', () => {
    homePage.visit("/cadastrarprodutos")
});

Given('I am on the home page with a regular user', () => {
    testData = dataGenerator.generateValidUser();
    signupPage.signupRegularUserSuccess(testData.name, testData.email, testData.password);
    loginPage.acessLoginPage();
    homePage.validadeRegularUserLogin();
    homePage.acessRegisterProduct();
})

Given('I am on the home page with an admin user', () => {    
    testData = dataGenerator.generateValidUser();
    signupPage.signupAdminUserSuccess(testData.name, testData.email, testData.password);
    loginPage.acessLoginPage();
    homePage.validadeAdminUserLogin();
    homePage.clickRegisterProduct();
})