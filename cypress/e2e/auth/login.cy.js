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


    it('should show error for invalid email and invalid password', () => {

        cy.fixture('users').then((users) => {

            LoginPage.visit();

            LoginPage.login(
                users.invalidUser.email,
                users.invalidUser.password
            );

            cy.contains(
                "Bad credentials! Please try again! Make sure that you've registered."
            ).should('be.visible');

        });

    });


    it('should show error for blank email and valid password', () => {

        cy.fixture('users').then((users) => {

            LoginPage.visit();

            LoginPage.login(
                users.blankEmail.email,
                users.blankEmail.password
            );

            cy.contains(
                "Bad credentials! Please try again! Make sure that you've registered."
            ).should('be.visible');

        });

    });


    it('should show error for valid email and invalid password', () => {

        cy.fixture('users').then((users) => {

            LoginPage.visit();

            LoginPage.login(
                users.invalidPassword.email,
                users.invalidPassword.password
            );

            cy.contains(
                "Bad credentials! Please try again! Make sure that you've registered."
            ).should('be.visible');

        });

    });


    it('should show error for blank email and password', () => {

        cy.fixture('users').then((users) => {

            LoginPage.visit();

            LoginPage.login(
                users.blankInputs.email,
                users.blankInputs.password
            );

            cy.contains(
                "Bad credentials! Please try again! Make sure that you've registered."
            ).should('be.visible');

        });

    });


    it('should show error for valid email and blank password', () => {

        cy.fixture('users').then((users) => {

            LoginPage.visit();

            LoginPage.login(
                users.blankPassword.email,
                users.blankPassword.password
            );

            cy.contains(
                "Bad credentials! Please try again! Make sure that you've registered."
            ).should('be.visible');

        });

    });


    it('should show error for blank email and invalid password', () => {

        cy.fixture('users').then((users) => {

            LoginPage.visit();

            LoginPage.login(
                users.blankEmailInvalidPassword.email,
                users.blankEmailInvalidPassword.password
            );

            cy.contains(
                "Bad credentials! Please try again! Make sure that you've registered."
            ).should('be.visible');

        });

    });


    it('should login successfully with leading and trailing spaces in email', () => {

        cy.fixture('users').then((users) => {

            LoginPage.visit();

            LoginPage.login(
                users.emailWithSpaces.email,
                users.emailWithSpaces.password
            );

            cy.contains('Log Out').should('be.visible');

        });

    });


    it('should handle password with leading and trailing spaces', () => {

        cy.fixture('users').then((users) => {

            LoginPage.visit();

            LoginPage.login(
                users.passwordWithSpaces.email,
                users.passwordWithSpaces.password
            );

            cy.contains(
                "Bad credentials! Please try again! Make sure that you've registered."
            ).should('be.visible');

        });

    });


    it('should handle uppercase email', () => {

        cy.fixture('users').then((users) => {

            LoginPage.visit();

            LoginPage.login(
                users.uppercaseEmail.email,
                users.uppercaseEmail.password
            );

            cy.contains(
                "Bad credentials! Please try again! Make sure that you've registered."
            ).should('be.visible');

        });

    });


    it('should handle very long email and password', () => {

        cy.fixture('users').then((users) => {

            LoginPage.visit();

            LoginPage.login(
                users.longInput.email,
                users.longInput.password
            );

            cy.contains(
                "Bad credentials! Please try again! Make sure that you've registered."
            ).should('be.visible');

        });

    });


    it('should show validation error for special characters in email', () => {

        cy.fixture('users').then((users) => {

            LoginPage.visit();

            LoginPage.login(
                users.specialCharacters.email,
                users.specialCharacters.password
            );

            cy.get('input[type="email"]')
                .should('have.prop', 'validity')
                .and('have.property', 'valid', false);

        });

    });

});