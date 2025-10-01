/// <reference types="cypress" />


export default {
    // selector centralization
    elements: {
        productNameInput: '[data-testid="nome"]',
        productPriceInput: '[data-testid="preco"]',
        productDescriptionInput: 'textarea[data-testid="descricao"]',
        productQuantityInput: '[data-testid="quantity"]',
        registerProductButton: '[data-testid="cadastarProdutos"]',
        registerProductTitle: 'Cadastrar Produtos'
    },

    acessRegisterProductPage() {
        cy.visit('/cadastrarprodutos')
    },

    fillProductName(name) {
        cy.get(this.elements.productNameInput).should('be.visible').type(name)
    },
    
    fillProductPrice(price) {
        cy.get(this.elements.productPriceInput).should('be.visible').type(price)
    },
    
    fillProductDescription(description) {
        cy.get(this.elements.productDescriptionInput).should('be.visible').type(description)
    },

    fillProductQuantity(quantity) {
        cy.get(this.elements.productQuantityInput).should('be.visible').type(quantity)
    },

    registerProductButton(){
        cy.get(this.elements.registerProductButton).should('be.visible').click()
    },

    registerProductSuccessfully(productName, productPrice, productDescription, productQuantity) {
    
        //this.acessRegisterProductPage()
        this.fillProductName(productName)
        this.fillProductPrice(productPrice)
        this.fillProductDescription(productDescription)
        this.fillProductQuantity(productQuantity)
        this.registerProductButton()
    }
}
