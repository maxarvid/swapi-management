describe("When user visits route that does not exist", () => {
  beforeEach(() => {
    cy.visit("/some-nonsense");
  });

  it("is expected to redirect to a 404 page", () => {
    cy.url().should("include", "404");
  });

  it('is expected to render a message to the user', () => {
    cy.get('[data-cy=not-found]')
  });
});
