/// <reference types="cypress" />

export default {
    
    // selector centralization
    elements: {
        emailInput: 'input[data-testid="email"]',
        passwordInput: 'input[data-testid="senha"]',
        loginButton: 'button[data-testid="entrar"]',
        loginTitle: 'Login'
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
    }
}
