describe('Navigation', () => {
  it('loads up', () => {
    //עבור לכתובת הזו
    cy.visit('http://192.168.0.59:5173/')

    //בדוק אם קיים סרגל ניווט
    cy.get('[data-test="navigation"]').should('exist');

    //בדוק האם הקישורים מוצגים
    // cy.get('[data-test="navigation"] li')
    // .find("a")
    // .should("have.attr", "href", "/path")
    // .should("have.text", "Alcohol Anonymous");
    cy.get('[data-test="navigation"] li').contains('a', 'Home');
    cy.get('[data-test="navigation"] li').contains('a', 'App');
    cy.get('[data-test="navigation"] li').contains('a', 'About'); 
    
    //לחיצה על קישור מסויים
    cy.get('[data-test="app-link"] a').click();

    //בדיקה שהכתובת החדשה שנטענה תואמת
    cy.location('href').should('eq', 'http://192.168.0.59:5173/notes');
  });
})