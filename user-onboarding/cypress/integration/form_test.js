/* global cy */
// KEYWORDS: describe, it, context, specify, beforeEach
// ARRANGE - Get the element
// ACT - MIMIC USER INTERACTION
// ASSERT - SIMULATE ELEMENT
// DESCRIBE(Context) - Describes what this file is for // What we are testing in this file

describe("Test our form inputs", function() {

    beforeEach(function() {
        // Check if visit is successful
        cy.visit("http://localhost:3000/");
    });
    it("add text to name input", function() {
    // Test Name Value
    cy.get('[data-cy="name"]')
    .type("Milosz")
    .should("have.value", "Milosz")
    .type("Name is required.")
    .should("have.length", 1);
    cy.get('[data-cy="email"]')
    .type("email@email.com")
    .should("have.value", "email@email.com")
    .type("Email is required")
    .should("have.length", 1); 
    cy.get('[data-cy="password"]')
    .type("12345678")
    .should("have.value", "12345678")
    .type("Password is required")
    .should("have.length", 1);
    cy.get('[type="checkbox"]').check().should("be.checked"); // Checks if password has value - if not - throw error
    //cy.contains('Submit').click();
    cy.get("form").submit() 

    // EXAMPLE - Validate Form
    // it('check validation message on invalid input', () => {
    //     cy.get('input:invalid').should('have.length', 0)
    //     cy.get('[type="email"]').type('not_an_email')
    //     cy.get('[type="submit"]').click()
    //     cy.get('input:invalid').should('have.length', 1)
    //     cy.get('[type="email"]').then(($input) => {
    //       expect($input[0].validationMessage).to.eq('I expect an email!')
    //     })
    //   })
    });

});


// BeforeEach - exectues each block of code before each "it"