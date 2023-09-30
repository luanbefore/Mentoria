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
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Luiz Carlos Neto')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('04705938143')
        cy.get(':nth-child(3) > :nth-child(1) > input').type('luiz.neto@before.com.br')
        cy.get(':nth-child(3) > :nth-child(2) > input').type('67992414555')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('79013250')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
        cy.get(':nth-child(4) > :nth-child(1) > input').type('540')
        cy.get(':nth-child(4) > :nth-child(2) > input').type('Casa')
        cy.get(':nth-child(4) > :nth-child(2) > input').click()
        cy.get('.delivery-method > :nth-child(3)').click()
        cy.get('p').attachFile('download.png', { subjectType: 'drag-n-drop' })
    });
});