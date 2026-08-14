import LoginPage from '../../pages/login/LoginPage';

describe('InsightHub QA Automation - Login', () => {

  it('should login with valid credentials', () => {

    cy.fixture('users').then((users) => {

      LoginPage.visit();

      LoginPage.login(
        users.validUser.email,
        users.validUser.password
      );

      cy.contains('Log Out').should('be.visible');

    });

  });

});