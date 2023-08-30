describe('My First Test', () => {
  describe('Supabase', () => {
    it('should display a headline', () => {
      cy.visit('/');
      cy.get('h1').should('contain', 'Supabase + Angular');
    });
  });
});
