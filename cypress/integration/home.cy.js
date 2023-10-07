

describe('Validar teste na tela do Bugereats', () => {
  it('validando texto principal', () => {
      cy.visit('https://buger-eats.vercel.app/');
      cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats');
  });
  it('validando texto secundário', () => {
      cy.visit('https://buger-eats.vercel.app/');
      cy.get('p').should('have.text', 'Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.');
  });
  it('validando NOME botão cadastro', () => {
      cy.visit('https://buger-eats.vercel.app/');
      cy.get('strong').should('have.text', 'Cadastre-se para fazer entregas');
  });
  it('validando CLICAR e preencher formulário no botão cadastro', () => {
      cy.visit('https://buger-eats.vercel.app/');
      cy.get('a').click();
      cy.get('[name="name"]').type('Luiz Carlos Neto');
      cy.get('[name="email"]').type('luiz.neto@before.com.br');
      cy.get('[name="cpf"]').type('04705938143')
      cy.get('[name="whatsapp"]').type('67992414555')
      cy.get('[name="postalcode"]').type('79013250')
      cy.get('[value="Buscar CEP"]').click()
      cy.get('[placeholder="Número"]').type('540')
      cy.get('[placeholder="Complemento"]').type('Casa')
      cy.get('.delivery-method > :nth-child(3)').click()
      cy.get('.dropzone').selectFile('cypress/fixtures/download (1).jpeg', { action: 'drag-drop' })
      cy.get('.button-success').click()
      cy.get('.swal2-popup')
          .should('contain.text', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
          cy.get('.swal2-confirm').click()
  });
});