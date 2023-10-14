describe('Acesso ao site e reaização da compra', () => {
    beforeEach (() => {
        cy.visit('https://www.saucedemo.com/');
    });
    it('realizando o acesso ao site', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[class="submit-button btn_action"]').click ();
        cy.get('.shopping_cart_link').click ();
        cy.get('[data-test="continue-shopping"]').click ();
        //Adicionando produtos no carrinho
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click ();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click ();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click ();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click ();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click ();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click ();
        cy.get('.shopping_cart_link').click ();
        cy.get('[data-test="checkout"]').click ();
        //Inserindo os dados para conclusão da compra
        cy.get('[data-test="firstName"]').type('Germano');
        cy.get('[data-test="lastName"]').type('Iora');
        cy.get('[data-test="postalCode"]').type('79005270');
        cy.get('[data-test="continue"]').click ();
        cy.get('[data-test="finish"]').click ();
        //Validando texto de finalização da compra
        cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
        cy.get('.complete-text').should('contain.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        cy.get('[data-test="back-to-products"]').click ();
    });
});