describe('Validando texto da tela home', () => {
  beforeEach (() => {
      cy.visit('https://buger-eats.vercel.app/');
  });
  it('Validando texto principal', () => {
      cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats');
  });
  it('Validando texto secundário', () => {
      cy.get('p').should('have.text', 'Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.'); 
  });
  it('Validando botão de cadastro', () => {
      cy.get('a').click();
      cy.get('h1').should('contain.text', 'Cadastre-se para');
      cy.get('h1').should('contain.text', 'fazer entregas');
  });
  it('Preenchendo o campo nome', () => {
      cy.get('a').click();
      cy.get('[name="name"]').type('Julio Renan Silveira');
      cy.get('[name="cpf"]').type('087.244.080-00')
      cy.get('.button-success').click();
      cy.get('[class="alert-error"]').should('contain.text', 'Oops! CPF inválido');
  });
  it('Validando o campo CEP', () => {
      cy.get('a').click();
      cy.get('[name="name"]').type('Julio Renan Silveira');
      cy.get('[name="cpf"]').type('08724408000');
      cy.get('[name="email"]').type('germano.iora@gmail.com');
      cy.get('[name="whatsapp"]').type('95989651212');
      cy.get('[class="button-success"]').click();
      cy.get('[class="alert-error"]').should('contain.text', 'É necessário informar o CEP');
  })
  it('Criando cadastro completo', () => {
      cy.get('a').click();
      cy.get('[name="name"]').type('Julio Renan Silveira');
      cy.get('[name="cpf"]').type('08724408000');
      cy.get('[name="email"]').type('germano.iora@gmail.com');
      cy.get('[name="whatsapp"]').type('95989651212');
      cy.get('[name="postalcode"]').type(79005270);
      cy.get('[value="Buscar CEP"]').click();
      cy.get('[name="address-number"]').type('325');
      cy.get('.delivery-method > :nth-child(1)').click();
      cy.get('[class="dropzone"]').selectFile('rgexemplo.jpeg', { action: 'drag-drop' });
      cy.get('[class="button-success"]').click();
      cy.get('[class="swal2-title"]').should('contain.text', 'Aí Sim...');
      cy.get('[class="swal2-html-container"]').should('contain.text', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.');
      cy.wait(5000)
      cy.get('.swal2-confirm').click();
  })
});