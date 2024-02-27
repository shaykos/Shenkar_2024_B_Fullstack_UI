import App from "../../src/App";

describe('Simple App Test', () => {
  beforeEach(() => {
    cy.mount(<App />)
  });

  it('load and shows kuku', () => {
    cy.getElement('p-welcome').should("have.text", "kuku");
  });

  it('needs to show an image', () => {
    cy.get('[data-test="test-img"]')
      .should('exist')
      .should('have.attr', 'src')
      .should('include', 'https://docs.cypress.io/img/logo/cypress-logo-light.svg')
  });

  it('shows our tasks', () => {
    cy.get('[data-test="test-tasks"] li').should('have.length', 5);
  });

  it('show text after btn click', () => {
      cy.get('[data-test="test-text"]')
      .should('not.exist');

      cy.get('[data-test="test-btn"]').click();

      cy.get('[data-test="test-text"]')
      .should('exist');
  });
});