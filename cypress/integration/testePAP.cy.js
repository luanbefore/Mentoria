describe('lançando uma venda', () => {
  beforeEach ( () => {
    cy.visit('https://beta-papmobile.before.com.br/_sys/');
  });

  it('logando no PAP', () => {
    cy.get('.input-user').type('valnei');
    cy.get('.input-password').type('beta');
    cy.wait(19000);
    cy.get('[data-test="botao"]').click();
    cy.get('.opcoes-principais > :nth-child(1)').click();
    cy.wait(4000);
    cy.get('[data-test="uf"] > .v-menu-wrapper > [data-test="activator"] > .field-group > .select-input').click();
    cy.get('[style="overflow-y: auto; max-height: 200px;"] > :nth-child(13)').click();
    cy.get('[data-test="pdv"] > .v-menu-wrapper > [data-test="activator"] > .field-group > .select-input').click();
    cy.get('[data-test="pdv"] > .v-menu-wrapper > .v-menu > [data-test="options-wrapper"] > [style="overflow-y: auto; max-height: 200px;"] > :nth-child(1)').click();
    cy.get('[data-test="vendedor"] > .v-menu-wrapper > [data-test="activator"] > .field-group > .select-input').click();
    cy.get('[data-test="vendedor"] > .v-menu-wrapper > .v-menu > [data-test="options-wrapper"] > [style="overflow-y: auto; max-height: 200px;"] > :nth-child(1)').click();
    cy.get('.body > .btn').click();
    cy.get('[data-test="input"]').type('093.363.898-15');
    cy.get('.body > .btn').click();
    cy.wait(2000);
    cy.get('[data-value="0"]').click();
    cy.get('.body > .btn').click();
    cy.get('.modal-footer > .btn-success').click();
    cy.wait(2000);
    cy.get('.body > .btn').click();
    cy.wait(7000);
    cy.get('.menu > .btn-primary').click();
    cy.get('.fixa').click();
    cy.get('.servicos-container > :nth-child(2)').click();
    cy.get('.select-input').click();
    cy.get('[style="overflow-y: auto; max-height: 200px;"] > :nth-child(4)').click();
    cy.get('[data-value="1"]').click();
    cy.get('.body > .btn').click();
    cy.get('.body > .btn-primary').click();
    cy.get('.body > .btn').click();
    cy.get('[data-test="formaEnvioPapel"] > .radio-group > [data-value="1"]').click();
    cy.get('[data-value="8"]').click();
    cy.get('[data-test="formaPagamento"] > .radio-group > [data-value="1"]').click();
    cy.get('.body > .btn-primary').click();
    cy.get('.body > .btn').click();
    cy.get('.oferta-biometria > :nth-child(2)').click();
    cy.get('.body > .btn').click();
    cy.get('[data-test="botao-continuar"]').click();
  });

});