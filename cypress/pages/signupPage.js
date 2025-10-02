export default {

    elements: {
        nameInput: 'input[data-testid="nome"]',
        emailInput: 'input[data-testid="email"]',
        passwordInput: 'input[data-testid="password"]',
        adminCheckbox: '[id="administrador"]',
        signupButton: 'button[data-testid="cadastrar"]',
        signupTitle: '.font-robot',
        sucessMessage: '.alert-link',
        errorMessage: '.alert-secondary'
    },

    acessUserSignupPage() {
        cy.visit('/cadastrarusuarios');
        cy.get(this.elements.signupTitle).should('have.text', 'Cadastro')
    },

    fillName(name) {
        cy.get(this.elements.nameInput).should('be.visible').type(name)
    },

    fillEmail(email) {
        cy.get(this.elements.emailInput).should('be.visible').type(email)
    },

    fillPassword(password) {
        cy.get(this.elements.passwordInput).should('be.visible').type(password)
    },

    checkAdmin() {
        cy.get(this.elements.adminCheckbox).check()
    },

    clickSubmitSignupForm() {
        cy.get(this.elements.signupButton).should('be.visible').click();
    },  

    validateSuccessSignupMessage() {
        cy.get(this.elements.sucessMessage).should('have.text', 'Cadastro realizado com sucesso')
    },

    errorMessageInvalidEmail() {
        cy.get(this.elements.errorMessage).should('be.visible').and('contain.text', 'Email deve ser um email válido')
    },

    signupRegularUserSuccess(name, email, password) {
        this.acessUserSignupPage();
        this.fillName(name);
        this.fillEmail(email);
        this.fillPassword(password);
        this.clickSubmitSignupForm();
        this.validateSuccessSignupMessage();
        
    },

    signupAdminUserSuccess(name, email, password) {
        this.acessUserSignupPage();
        this.fillName(name);
        this.fillEmail(email);
        this.fillPassword(password);
        this.checkAdmin();
        this.clickSubmitSignupForm();
        this.validateSuccessSignupMessage();
    }

}