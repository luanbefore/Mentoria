/// <reference types="cypress" />

describe('acesso a página inicial buguer eats', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://buger-eats.vercel.app/')
})

  it.only('validar home', () => {
    cy.get('h1').should('have.text','Seja um parceiro entregador pela Buger Eats');
  })
  it('validar secundario', () => {
    cy.get('p').should('have.text','Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.');
  })

  it('Cadastro com CPF inválido', () =>{
    cy.get('a').click()
    cy.url().should('eq','https://buger-eats.vercel.app/deliver')
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('fulano de tal')    
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('987456321')
    cy.get(':nth-child(3) > :nth-child(1) > input').type('teste@test.com')
    cy.get(':nth-child(3) > :nth-child(2) > input').type('67998745632')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('79112201')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
    cy.get(':nth-child(4) > :nth-child(1) > input').type('123')
    cy.get('.delivery-method > :nth-child(1)').click()
    cy.get('.dropzone').selectFile('imagemVenda.png', { action: 'drag-drop' })
    cy.get('.button-success').click()
    cy.get('.alert-error').should('have.text','Oops! CPF inválido')

  })
  it('Cadastro caminho feliz', () =>{
    cy.get('a').click()
    cy.url().should('eq','https://buger-eats.vercel.app/deliver')
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('fulano de tal')    
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('04176037032')
    cy.get(':nth-child(3) > :nth-child(1) > input').type('teste@test.com')
    cy.get(':nth-child(3) > :nth-child(2) > input').type('67998745632')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('79112201')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
    cy.get(':nth-child(4) > :nth-child(1) > input').type('123')
    cy.get('.delivery-method > :nth-child(1)').click()
    cy.get('.dropzone').selectFile('imagemVenda.png', { action: 'drag-drop' })
    cy.get('.button-success').click()
    cy.get('.swal2-popup').should('exist')
    cy.get('.swal2-confirm').click()
    cy.url().should('eq','https://buger-eats.vercel.app/')
  })


  it('voltar para home', () =>{
    cy.get('a').click()
    cy.get('a').click()
    cy.url().should('eq','https://buger-eats.vercel.app/')

  })
  
}
)