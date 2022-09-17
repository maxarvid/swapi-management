describe("When user visits route that does not exist", () => {
  beforeEach(() => {
    cy.visit("/some-nonsense");
  });

  it("is expected to redirect to a 404 page", () => {
    cy.url().should("contain.text", 404);
  });
});
