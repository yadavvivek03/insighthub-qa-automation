class LoginPage {

    visit() {
        cy.visit('https://qa-practice.netlify.app/auth_ecommerce.html', {
            failOnStatusCode: false,
            timeout: 60000
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
            .click();
    }

    login(email, password) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLogin();
    }
}

export default new LoginPage();