///<reference types="cypress" />

function typeInPassword(xxx) {
  cy.get("#password_one").type(xxx);
  cy.get("#password_one").should("have.value", xxx);
  cy.get("#password_two").type(xxx);
  cy.get("#password_two").should("have.value", xxx);
  cy.get("input").should("have.attr", "type", "password");
  // cy.get("form").find('[type="password"]').should("have.length", 2);
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
    cy.get("#password_one").should("have.value", "Asdfg");
    cy.get("#password_two").should("have.value", "Asdfg");
    // cy.get("input").should("have.attr", "type", "text");
    cy.get("form").find('[type="text"]').should("have.length", 2);
  });

  it("Hide the Passwords", () => {
    typeInPassword("Asdfg");
    cy.get("#password_button").click();
    cy.get("form").find('[type="text"]').should("have.length", 2);
    cy.get("#password_button").click();
    cy.get("form").find('[type="password"]').should("have.length", 2);
  });

  it("Are the the right symbols displayed?", () => {
    typeInPassword("Asdfg1qwert");
    cy.get("#symbol_equal").contains("✅");
    // cy.get("#symbol_equal").should("have.text", "✅");
    cy.get("#symbol_lower").contains("✅");
    cy.get("#symbol_upper").contains("✅");
    cy.get("#symbol_numbers").contains("✅");
    cy.get("#symbol_tenCharacters").contains("✅");
  });
});
