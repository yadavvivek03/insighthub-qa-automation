class LoginPage {

    visit() {
        cy.visit('https://qa-practice.netlify.app/auth_ecommerce.html', {
            timeout: 120000
        });
    }

    enterEmail(email) {
        cy.get('#email').type(email);
    }

    enterPassword(password) {
        cy.get('#password').type(password);
    }

    clickLogin() {
        cy.get('#submitLoginBtn').click();
    }

    login(email, password) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLogin();
    }
}

export default new LoginPage();