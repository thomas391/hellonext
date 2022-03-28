describe('', () => {
  it('opens hello api', () => {
    cy.visit('/api/hello');
    cy.contains('John Doe');
  })
})