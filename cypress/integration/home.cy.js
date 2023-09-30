

describe('Validando textos da tela home', () => {
    beforeEach(() => {
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
      cy.get('h1').should('contain.text', 'Cadastre-se para').and('contain.text', 'fazer entregas');
    });
    it('Preenchendo formulário', () => {
      cy.get('a').click();
      // cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Entreguildo Silva');
      cy.get('[name="name"]').type('Cypriano Barbosa');
      cy.get('[name="cpf"]').type('73081939690');
      cy.get('[name="email"]').type('entreguildo.silva@qamaster.com');
      cy.get('[name="whatsapp"]').type('67981968877');
      cy.get('[name="postalcode"]').type('79020250');
      cy.get('[name="address-number"]').type('790');
      cy.get('p').attachFile('imagemVenda.png', { subjectType: 'drag-n-drop' });
      cy.get('.delivery-method > :nth-child(1)');
      cy.get('.button-success').click();
      cy.get('.swal2-popup')
        .should('be.visible')
        .and('contain.text', 'Aí Sim...')
        .and('contain.text', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.');
    });
  });
  