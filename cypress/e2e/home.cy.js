describe('Validar teste de compra de novos itens ao carrinho Swag Labs', () => {
    it('validando LOGIN no sistema', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
    cy.get('#item_4_title_link > .inventory_item_name').click();
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test=continue-shopping]').click();
    cy.get('[data-test=add-to-cart-sauce-labs-fleece-jacket]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test=checkout]').click();
    cy.get('form').click();
    cy.get('[data-test=firstName]').type('Luiz Carlos');
    cy.get('[data-test=lastName]').type('Neto');
    cy.get('[data-test=postalCode]').type('79013250');
    cy.get('[data-test="continue"]').click()
    cy.get('.summary_total_label').click();
    cy.get('[data-test=finish]').click();
    cy.get('.complete-header').should ('have.text', 'Thank you for your order!')
    });
  });