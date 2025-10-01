/// <reference types="cypress" />

export default {

    elements:{

        listaDeCompras: '[data-testid="lista-de-compras"]',
        carrinho: '[data-testid="carrinho"]',
        cadastrarUsuarios: '[data-testid="cadastrar-usuarios"]',
        listarUsuarios: '[data-testid="listar-usuarios"]',
        cadastrarProdutos: '[data-testid="cadastrar-produtos"]',
        listarProdutos: '[data-testid="listar-produtos"]',
        linkRelatorios: '[data-testid="link-relatorios"]',
        LogoutButton: '[data-testid="logout"]'
    },


    navigateToHomePage() {
        cy.visit('/home')
    },

    navigateToRegistrationProductPage() {
        cy.visit('/cadastrarprodutos')
    },

    validadeRegularUserLogin() {
        cy.get(this.elements.listaDeCompras).should('be.visible').and('contain.text', 'Lista de Compras')
        cy.get(this.elements.carrinho).should('be.visible').and('contain.text', 'Carrinho')
    },
    
    validadeAdminUserLogin() {
        cy.get(this.elements.cadastrarUsuarios).should('be.visible').and('contain.text', 'Cadastrar Usuários')
        cy.get(this.elements.listarUsuarios).should('be.visible').and('contain.text', 'Listar Usuários')
        cy.get(this.elements.cadastrarProdutos).should('be.visible').and('contain.text', 'Cadastrar Produtos')
        cy.get(this.elements.listarProdutos).should('be.visible').and('contain.text', 'Listar Produtos')
        cy.get(this.elements.linkRelatorios).should('be.visible').and('contain.text', 'Relatórios')
    },

    clickRegisterProduct() {
        cy.get(this.elements.cadastrarProdutos).click()
    },

    logout() {
        cy.get(this.elements.LogoutButton).contains('Logout').click()
    },

    acessRegisterProductAsAdmin() {
        this.validadeAdminUserLogin()
        this.clickRegisterProduct()
    },


}
