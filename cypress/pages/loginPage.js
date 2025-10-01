/// <reference types="cypress" />

export default {

    elements: {
        emailInput: 'input[data-testid="email"]',
        passwordInput: 'input[data-testid="senha"]',
        loginButton: 'button[data-testid="entrar"]',
        loginTitle: 'Login',
        errorMessage: '[class="alert alert-secondary alert-dismissible"]'
    },

    acessLoginPage() {
        cy.visit('/login');
        cy.contains(this.elements.loginTitle).should('be.visible')
    },

    fillEmail(email) {
        cy.get(this.elements.emailInput).should('be.visible').type(email)
    },

    fillPassword(password) {
        cy.get(this.elements.passwordInput).should('be.visible').type(password)
    },

    submitLogin() {
        cy.get(this.elements.loginButton).should('be.visible').click();
    },

    loginSuccess(email, password) {
        this.acessLoginPage();
        this.fillEmail(email);
        this.fillPassword(password);
        this.submitLogin();
    },

    errorMessage() {
        cy.get(this.elements.errorMessage).should('be.visible').and('contain', 'Email e/ou senha inválidos');
    }
}
