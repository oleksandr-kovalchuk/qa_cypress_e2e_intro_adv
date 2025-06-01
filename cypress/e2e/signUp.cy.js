const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.visit('/');

    cy.get('a[href="/user/register"]').contains('Sign up').click();

    cy.get('input[placeholder*="Username"]').type(user.username);
    cy.get('input[placeholder*="Email"]').type(user.email);
    cy.get('input[placeholder*="Password"]').type(user.password);

    cy.get('button[type="submit"]').contains('Sign up').click();

    cy.get('.navbar').should('contain.text', user.username.toLowerCase());
  });
});
