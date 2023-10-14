describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('#item_4_title_link > .inventory_item_name').should('contain.text', 'Sauce Labs Backpack');
    cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').should('contain.text', '$29.99');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain.text', 'Remove');
    cy.get('.shopping_cart_link').click();
    cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Backpack');
    cy.get('.inventory_item_price').should('contain.text', '$29.99');
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Valnei');
    cy.get('[data-test="lastName"]').type('Teste');
    cy.get('[data-test="postalCode"]').type('999999999');
    cy.get('[data-test="continue"]').click();
    cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Backpack');
    cy.get('.item_pricebar').should('contain.text', '$29.99');
    cy.get('[data-test="finish"]').click();
  });
});