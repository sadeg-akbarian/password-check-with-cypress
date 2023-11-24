///<reference types="cypress" />

function typeInPassword(xxx) {
  cy.get("#password_one").type(xxx);
  cy.get("#password_two").type(xxx);
}

describe("Testing the password check app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Type in the password in both inputs", () => {
    typeInPassword("Asdfg");
  });

  it("Show the Passwords", () => {
    typeInPassword("Asdfg");
    cy.get("#password_button").click();
  });

  it("Hide the Passwords", () => {
    typeInPassword("Asdfg");
    cy.get("#password_button").click();
    cy.get("#password_button").click();
  });

  it("Are the the right symbols displayed?", () => {
    typeInPassword("Asdfg1qwert");
    cy.get("#symbol_equal").contains("✅");
    cy.get("#symbol_lower").contains("✅");
    cy.get("#symbol_upper").contains("✅");
    cy.get("#symbol_numbers").contains("✅");
    cy.get("#symbol_tenCharacters").contains("✅");
  });
});
