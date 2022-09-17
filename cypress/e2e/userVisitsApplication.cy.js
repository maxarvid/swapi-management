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
    cy.get("[data-cy=star-wars-chars]").children().should("have.length", 6);
  });

  it("is expected to show a loading message while fetching data", () => {
    let resolveReq;
    cy.intercept("GET", "**/api/people", (req) => {
      return new Cypress.Promise((resolve) => {
        resolveReq = resolve;
      }).then(req.reply);
    });
    cy.visit("/");
    cy.get("[data-cy=loading-message").should("contain.text", "Loading...");
  });

  it("is expected to list Luke Skywalker as the first character", () => {
    cy.get("[data-cy=star-wars-chars")
      .children()
      .first()
      .should("contain.text", "Luke Skywalker");
  });
});
