describe('Notes e2e', () => {
  /* This code snippet is a test case written using Cypress for end-to-end testing of a notes
  application. Let me break down what each step in the test case is doing: */
  it('add note', () => {
    //עבור לכתובת הזו
    cy.visit('http://192.168.0.59:5173/')

    //בדוק אם קיים סרגל ניווט
    cy.get('[data-test="navigation"]').should('exist');

    //לחיצה על קישור מסויים
    cy.get('[data-test="app-link"] a').click();

    //בדיקה שהכתובת החדשה שנטענה תואמת
    cy.location('href').should('eq', 'http://192.168.0.59:5173/notes');

    cy.contains("Empty notes!");

    cy.get('[data-test="form"]').find('input').type('note 1');

    cy.get('[data-test="form"]').submit();

    cy.contains('All Notes');

  });

  
})