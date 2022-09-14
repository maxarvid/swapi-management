describe("When the user visits the application", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/people", {
      fixture: "charactersIndexResponse.json",
    }).as("charactersIndex");
    cy.visit("/");
  });

  it("is expected to make an http request of type GET", () => {
    cy.wait("@charactersIndex").its("request.method").should("eq", "GET");
  });

  it("is expected to render a list of star wars characters", () => {
    cy.get("[data-cy=star-wars-chars]").should("have.length", 6);
  });
});
