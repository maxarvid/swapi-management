describe("When the user visits the application", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("is expected to render hello world", () => {
    cy.get("body").should("contain.text", "Hello World!");
  });
}); 
