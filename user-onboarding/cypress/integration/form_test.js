/* global cy */
// KEYWORDS: describe, it, context, specify, beforeEach

// DESCRIBE(Context) - Describes what this file is for // What we are testing in this file

describe("Test our form inputs", function() {
    beforeEach(function() {
        // Check if visit is successful
        cy.visit("http://localhost:3000/");
    });
    it("add text to name input", function() {
        // Test Name Value
    cy.get('[data-cy="name"]').type("Milosz").should("have.value", "Milosz");
    cy.get('[data-cy="email"]')
    .type("email@email.com")
    .should("have.value", "email@email.com");
    cy.get('[data-cy="password"]').should("have.value");
    cy.get('[type="checkbox"]').check().should("be.checked");
    //cy.contains('Submit').click();
    cy.get("form").submit() 
    });

    // it("second it test", function() {
    //     // Test Email Value
    // })
});


// BeforeEach - exectues each block of code before each "it"