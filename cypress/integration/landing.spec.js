describe('', () => {
  it('opens / landing page', () => {
    cy.visit('/');
    cy.contains('Welcome to Next.js!');
  })
})