import LoginPage from '../pages/login/LoginPage';

describe('InsightHub QA Automation - Login', () => {

    it('should login with valid credentials', () => {
        LoginPage.visit();
        LoginPage.login('admin@admin.com','admin123');

        cy.contains('Log Out').should('be.visible');
        cy.contains ("SHOPPING CART").should('be.visible')

    });

});