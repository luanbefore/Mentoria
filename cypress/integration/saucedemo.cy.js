describe('acesso a página inicial saucedemo', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://www.saucedemo.com/')
  })

  it.only('validar home', () => {
    cy.get('.login_logo').should('have.text','Swag Labs');

  })
  
  it.only('Acessar e realizar compra standard_user',()=>{
    //login
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    //selecao de produtos
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    cy.get('.shopping_cart_badge').should('have.text','6');
    cy.get('.shopping_cart_link').click();
    //checkout
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('fulano');
    cy.get('[data-test="lastName"]').type('de tal');
    cy.get('[data-test="postalCode"]').type('123123123');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.url().should('eq','https://www.saucedemo.com/checkout-complete.html')
    cy.get('.complete-header').should('have.text','Thank you for your order!');
    //retornar a home
    cy.get('[data-test="back-to-products"]').click();
    cy.url().should('eq','https://www.saucedemo.com/inventory.html');
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click;

  }
  )
  it.only('Acessar locked_out_user',()=>{
    //login
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    //Validar erro
    cy.get('[data-test="error"]').should('have.text','Epic sadface: Sorry, this user has been locked out.');
    }
  )
 


  it.only('Acessar e realizar compra problem_user',()=>{
    //login
    cy.get('[data-test="username"]').type('problem_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    //selecao de produtos
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    cy.get('.shopping_cart_badge').should('have.text','6');
    cy.get('.shopping_cart_link').click();
    //checkout
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('fulano');
    cy.get('[data-test="lastName"]').type('de tal');
    cy.get('[data-test="postalCode"]').type('123123123');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.url().should('eq','https://www.saucedemo.com/checkout-complete.html')
    cy.get('.complete-header').should('have.text','Thank you for your order!');
    //retornar a home
    cy.get('[data-test="back-to-products"]').click();
    cy.url().should('eq','https://www.saucedemo.com/inventory.html');
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click;

   }
  )





  }
)