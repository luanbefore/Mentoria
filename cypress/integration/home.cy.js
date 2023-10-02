describe('Validando texto da tela home', () => {
  beforeEach ( () => {
    cy.visit('https://buger-eats.vercel.app/');
  });

  it('Validando texto princiapl', () => {
    cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats');
  });

  it('Validando texto secundario', () => {
  cy.get('p').should('have.text', 'Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.');
  });

  it('Validando botão de cadastro', () => {
    cy.get('a').click();
    cy.get('h1').should('contain.text', 'Cadastre-se para').and('contain.text', 'fazer entregas');
  });

  it('Validando CPF', () => {
    cy.get('a').click();
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Valnei');
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('002');
    cy.get('.button-success').click();
    cy.get('.alert-error').should('contain.text', 'Oops! CPF inválido');
  });

  it('Validando CEP', () => {
    cy.get('a').click();
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Valnei Rezende');
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('02546505147');
    cy.get(':nth-child(3) > :nth-child(1) > input').type('teste@teste.com');
    cy.get(':nth-child(3) > :nth-child(2) > input').type('67999988898');
    cy.get('.button-success').click();
    cy.get(':nth-child(2) > :nth-child(1) > .alert-error').should('contain.text', 'É necessário informar o CEP');
  });

  it('Cadastro com sucesso', () => {
    cy.get('a').click();
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Valnei Rezende');
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('02546505147');
    cy.get(':nth-child(3) > :nth-child(1) > input').type('teste@teste.com');
    cy.get(':nth-child(3) > :nth-child(2) > input').type('67984052225');
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('79020-250');
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click();
    cy.get(':nth-child(4) > :nth-child(1) > input').type('50');
    cy.get('.delivery-method > :nth-child(2)').click();
    cy.get('.dropzone').selectFile('exemplo.jpg', {
      action: 'drag-drop'
     });
    cy.get('.button-success').click();
    
  });

})