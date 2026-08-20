class LoginPage {

    visit() {
        cy.visit('/auth_ecommerce.html', {
            failOnStatusCode: false
        });

        cy.get('#email', { timeout: 30000 })
            .should('be.visible');
    }

    enterEmail(email) {
        cy.get('#email')
            .clear()
            .type(email);
    }

    enterPassword(password) {
        cy.get('#password')
            .clear()
            .type(password);
    }

    clickLogin() {
        cy.get('#submitLoginBtn')
            .should('be.visible')
            .and('be.enabled')
            .click();
    }

    login(email, password) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLogin();
    }
}

export default new LoginPage();