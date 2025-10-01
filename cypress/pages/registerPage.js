export default {

    // selector centralization
    elements: {
        nameInput: 'input[data-testid="nome"]',
        emailInput: 'input[data-testid="email"]',
        passwordInput: 'input[data-testid="password"]',
        adminCheckbox: '[id="administrador"]',
        registerButton: 'button[data-testid="cadastrar"]',
        registerTitle: '.font-robot',
        sucessMessage: '.alert-link'
    },

    acessUserRegisterPage() {
        cy.visit('/cadastrarusuarios');
        cy.get(this.elements.registerTitle).should('have.text', 'Cadastro')
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

    fillEmailAndPassword(email, password) {
        this.fillEmail(email);
        this.fillPassword(password);
    },

    checkAdmin() {
        cy.get(this.elements.adminCheckbox).check()
    },

    submitRegister() {
        cy.get(this.elements.registerButton).should('be.visible').click();
        cy.get(this.elements.sucessMessage).should('have.text', 'Cadastro realizado com sucesso')
    },  

    validateSuccessRegisterMessage() {
        cy.get(this.elements.sucessMessage).should('have.text', 'Cadastro realizado com sucesso')
    },


    registerRegularUserSuccess(name, email, password, isAdmin = false) {
        this.acessUserRegisterPage();
        this.fillName(name);
        this.fillEmail(email);
        this.fillPassword(password);
        this.submitRegister();
        this.validateSuccessRegisterMessage();
        
    },

    registerAdminUserSuccess(name, email, password) {
        this.acessUserRegisterPage();
        this.fillName(name);
        this.fillEmail(email);
        this.fillPassword(password);
        this.checkAdmin();
        this.submitRegister();
        this.validateSuccessRegisterMessage();
    }

}